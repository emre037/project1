<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;

class CalendarController extends AbstractDashboardController
{
	public function __construct( string $wordpress_path_config ) {
		$this->wordpress_path_config = $wordpress_path_config;

	}
    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Logboek');
            
    }

	public function configureMenuItems(): iterable
    {
		yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToRoute('WP Users', 'fas fa-users', 'WordpressAccounts');
        yield MenuItem::linkToRoute('Active WP Plugins', 'fa fa-desktop', 'PluginListIndex');
        yield MenuItem::linkToRoute('Logboek', 'fa fa-calendar-o', 'calenderindex');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }

	 
    public function configureAssets(): Assets
    {
        return parent::configureAssets()
            ->addWebpackEncoreEntry('admin');
    }
    /**
     * Function: loadPluginData returns all data from the tables wp_wsal_occurrences and wp_wsal_metadata to CalendarPluginChanges.twig.html to display it in the calendar
     *
     * @Route("/calendar" , methods={"GET" , "POST"}, name="Calenderload"  )
     */
    public function loadPluginData(#[CurrentUser] ?User $user): Response
    {
        //In symfony 8.0 there is a new way to get the current user and that is with the #[CurrentUser] attribute which we will use to check if the user is logged in or not

        //retrieving the static class to get the DBName  so we dont need to rewrite the database names
        $connect = WPDBController::getConnection($this->wordpress_path_config);

        $data = array();

        //SQL query field where we join the table wp_wsal_occurrences that has data of the performed actions of the plugins with the table where the WordPress users are stored, so we can see which user performed which actions
        $query = "
   SELECT * FROM wp_wsal_occurrences
            INNER JOIN wp_users ON wp_users.ID = wp_wsal_occurrences.user_id
            JOIN wp_wsal_metadata ON wp_wsal_metadata.occurrence_id = wp_wsal_occurrences.id AND wp_wsal_metadata.name = 'plugindata'

            ";

        $statement = $connect->prepare($query);

        $statement->execute();

        $result = $statement->fetchAll();


        foreach ($result as $row) {
            $plugins = $row['value'];
            $pluginname = @unserialize($plugins);
            $data[] = array(
                //Data rows from the tables wp_wsal_occurrences , wp_users and wp_wsal_metadata
                'id' => $row["id"],
                'user_roles' => $row["user_roles"],
                'title' => ucfirst($row["object"]),
                'message' => $row["event_type"],
                'user_id' => $row["user_id"],
                //date('Y-m-d') is making sure that it's formatting the given unix timestamp from the database
                'start' => date('Y-m-d H:i:s', $row["created_on"]),
                'user_login' => $row["user_login"],
                //the row Value is being unserialised and is retrieving the Name value form the array value
                'value' => $pluginname->Name,
                'event_type' => $row["event_type"],

            );

        }

        //checking if user is logged in if not he will ben redirect to a page where he's asked to log in
        if (null === $user) {
            return $this->render(
                'ErrorPage.html.twig'
                , (array)Response::HTTP_UNAUTHORIZED);
        }

        //returning the $data array in a json format
        return $this->json($data);

    }
   
    /**
     * showPluginData returns the calendar template that we are using to display all the logs
     *
     * @Route("/calendar/index" , methods={"GET"}, name="calenderindex"  )
     */
    public function showPluginData(#[CurrentUser] ?User $user): Response
    {
        //In symfony 8.0 there is a new way to get the current user and that is with the #[CurrentUser] attribute which we will use to check if the user is logged in or not

        //checking if user is logged in if not he will ben redirect to a page where he's asked to log in
        if (null === $user) {

            return $this->render(
                'ErrorPage.html.twig'
                , (array)Response::HTTP_UNAUTHORIZED);

        }
        //returning to the page with the calendar that has the plugin changes interface and also returning the data from $data array and $pluginame value, so you can use it in the twig file
        return $this->render('CalendarPluginChanges.html.twig');
    }

    /**
     * Function: loadFileData returns all data from the table wp_wfcm_file_events  to CalendarFileChanges.twig.html to display it in the calendar
     *
     * @Route("/calendar/watch" , methods={"GET" , "POST"}, name="Calenderloadtest"  )
     */
    public function loadFileData(#[CurrentUser] ?User $user): Response
    {    //In symfony 8.0 there is a new way to get the current user and that is with the #[CurrentUser] attribute which we will use to check if the user is logged in or not

        $connect = WPDBController::getConnection($this->wordpress_path_config);

        $data = array();

        //SQL Query where we retrieve all the rows from wp_wfcm_file_events
        $query = "SELECT * FROM wp_wfcm_file_events ";

        $statement = $connect->prepare($query);

        $statement->execute();

        $result = $statement->fetchAll();

        foreach ($result as $row) {

            $data[] = array(
                //Data rows from the table wp_wfcm_file_events
                'id' => $row["event_id"],
                'event_file_path' => $row["event_file_path"],
                'start' => $row["event_date"],
                'title' => $row["event_content_type"],
                'message' => $row["event_type"],
            );
        }
        //checking if user is logged in if not he will ben redirect to a page where he's asked to log in
        if (null === $user) {
            return $this->render(
                'ErrorPage.html.twig'
                , (array)Response::HTTP_UNAUTHORIZED);
        }
        //returning the $data array in a json format
        return $this->json($data);
    }

    /**
     * showFileData returns the calendar template that we are using to display all the logs
     *
     * @Route("/calendar/fileindex" , methods={"GET"}, name="calendenbnbnrindextest"  )
     */
    public function showFileData(#[CurrentUser] ?User $user): Response
    {
        //In symfony 8.0 there is a new way to get the current user and that is with the #[CurrentUser] attribute which we will use to check if the user is logged in or not

        if (null === $user) {
            return $this->render(
                'ErrorPage.html.twig'
                , (array)Response::HTTP_UNAUTHORIZED);
        }

        //returning to the page with the calendar that has the file changes interface and also returning the data from $data array, so you can use it in the twig file
        return $this->render('CalendarFileChanges.html.twig');
    }

}