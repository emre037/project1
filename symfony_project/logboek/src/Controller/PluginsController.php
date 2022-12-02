<?php

namespace App\Controller;

use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use App\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;

class PluginsController extends AbstractDashboardController {

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
        yield MenuItem::linkToRoute('Logboek', 'fa fa-calendar-o', 'app_home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }

	 
    public function configureAssets(): Assets
    {
        return parent::configureAssets()
            ->addWebpackEncoreEntry('admin');
    }
	/**
     * Function: activePluginList returns the active plugins row that is in wp_options to display all the active plugins in the WordPress site and returns it with a template called plugins.html.twig
     *
	 * @Route("/plugins/index", methods={"GET" , "POST"}, name="PluginListIndex")
	 */
	//Every function with a route has the User variable included, so we can use it to check if the user is logged in
	public function activePluginList( #[CurrentUser] ?User $user ): Response {

		//retrieving the static class to get the DBName  so we don't need to rewrite the database names
		$connect = WPDBController::getConnection($this->wordpress_path_config);

		$data = array();
		//SQL query field where we retrieve the row with an option name is like 'active_plugins' from the table wp_options
		$query = "SELECT * FROM wp_options WHERE option_name = 'active_plugins'";

		$statement = $connect->prepare( $query );

		$statement->execute();

		$result = $statement->fetchAll();

		foreach ( $result as $row ) {
			$data[] = array(
				//Data rows from the table wp_options
				'option_id'    => $row['option_id'],
				'option_name'  => $row['option_name'],
				'option_value' => $row['option_value'],
			);

		}
		$plugins    = $row['option_value'];
		$pluginName = @unserialize( $plugins );

		//checking if user is logged in if not he will ben redirect to a page where he's asked to log in
		if ( null === $user ) {
			return $this->render(
				'ErrorPage.html.twig'
				, (array) Response::HTTP_UNAUTHORIZED );
		}
		//returning the $data array and the $pluginName variable that unserialised the row 'option_value'in a json format
		return $this->render( 'plugins.html.twig', [
			'wpOptions' => $data,
			'plugins'   => $pluginName,

		] );
	}

	/**
     * Function: wordpressAccounts returns all the logged in WordPress accounts from the table wp_users and returns it with a view accounts.html.twig 
     *
	 * @Route("/accounts", methods={"GET" , "POST"}, name="WordpressAccounts")
	 */
	public function wordpressAccounts(#[CurrentUser] ?User $user): Response {
        //In symfony 8.0 there is a new way to get the current user and that is with the #[CurrentUser] attribute which we will use to check if the user is logged in or not
		
		//retrieving the static class to get the DBName, so we don't need to rewrite the database names
		$connect = WPDBController::getConnection($this->wordpress_path_config);
		
		$data = array();

		//SQL query field where we retrieve all the rows from the table wp_users
		$query = "SELECT * FROM wp_users ";

		$statement = $connect->prepare( $query );

		$statement->execute();

		$result = $statement->fetchAll();

		foreach ( $result as $row ) {
			$data[] = array(
				//Data rows from the table wp_users
				'ID'                  => $row["ID"],
				'user_login'          => $row["user_login"],
				'user_pass'           => $row["user_pass"],
				'user_nicename'       => $row["user_nicename"],
				'user_email'          => $row["user_email"],
				'user_url'            => $row["user_url"],
				'user_registered'     => $row["user_registered"],
				'user_activation_key' => $row["user_activation_key"],
				'user_status'         => $row["user_status"],
				'display_name'        => $row["display_name"],
			);

		}

		//checking if user is logged in if not he will ben redirect to a page where he's asked to log in
		if ( null === $user ) {
			return $this->render(
				'ErrorPage.html.twig'
				, (array) Response::HTTP_UNAUTHORIZED );
		}

		//returning to the page with all the WordPress accounts and also returning ale the rows from $data array, so you can use it in the twig file
		return $this->render( 'accounts.html.twig', [
			'wpUsers' => $data,

		] );

	}


}
