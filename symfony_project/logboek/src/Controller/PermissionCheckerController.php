<?php


namespace App\Controller;

//require_once '/home/emreatelierix/public_html/monologger/node_modules/chokidar/types/index.d.ts';

//require '/home/emreatelierix/public_html/monologger/vendor/autoload.php';

//require('/home/emreatelierix/public_html/monologger/node_modules/chokidar/');


use App\Entity\User;
use PDOException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;


class PermissionCheckerController extends AbstractController {


	public function __construct( string $wordpress_path_config ) {
		$this->wordpress_path_config = $wordpress_path_config;

	}

	/**
	 * Function: permissionScanner checks in the given path  if all the file's permissions are equal to 0644
	 *
	 * @Route("/start/changes", methods={"GET" , "POST"}, name="startChanges")
	 */
	public function permissionScanner( #[CurrentUser] ?User $user ): Response {


		//retrieving the static class to get the DBName, so we don't need to rewrite the database names
		$connect = WPDBController::getConnection($this->wordpress_path_config );
		
		$data = array();
		//SQL query field where we retrieve the row with an option name is like 'active_plugins' from the table wp_options
		$query = "SELECT * FROM file_permissions_changes ";

		$statement = $connect->prepare( $query );

		$statement->execute();

		$result = $statement->fetchAll();

		foreach ( $result as $row ) {
			$data[] = array(
				//Data rows from the table wp_options
				'Change_ID'            => $row['Change_ID'],
				'filename'             => $row['filename'],
				'beforeFilepermission' => $row['beforeFilepermission'],
				'afterFilepermission'  => $row['afterFilepermission'],
				'date'                 => $row['date'],
			);

		}
		//checking if user is logged in if not he will ben redirect to a page where he's asked to log in
		if ( null === $user ) {
			return $this->render(
				'ErrorPage.html.twig'
				, (array) Response::HTTP_UNAUTHORIZED );
		}

		//returning the $data array and the $pluginName variable that unserialised the row 'option_value'in a json format
		return $this->render( 'checker.html.twig', [
			'permissionChanges' => $data,

		] );
	}

	/**
	 * Function: DirectoryScanner checks in the given path  if all the directory's permissions are equal to 0755
	 *
	 * @Route("/start/scanning", methods={"GET" , "POST"}, name="startScanning")
	 */
	public function permissionExecuter( $wordpress_path_config, $level = 0 ) {

		$items = scandir( $wordpress_path_config );

		foreach ( $items as $item ) {
			// ignore items strating with a dot (= hidden or nav)
			if ( str_starts_with( $item, '.' ) ) {
				continue;
			}

			$fullPath = $wordpress_path_config . DIRECTORY_SEPARATOR . $item;

			// add some whitespace to better mimic the file structure
			$item = str_repeat( '&nbsp;', $level * 3 ) . $item;
			// file
			if ( is_file( $fullPath ) && @fileperms( $fullPath ) - 4 ) {
				json_encode( "<option>$item</option>" );
			} // dir
			else if ( is_dir( $fullPath ) ) {
				// immediatly close the optgroup to prevent (invalid) nested optgroups
				json_encode( "<optgroup label='$item'></optgroup>" );
				// recursive call to self to add the subitems
				$this->permissionExecuter( $fullPath, $level + 1 );
			}

			$name = implode( @glob( $fullPath ) );
			$test = @substr( @sprintf( '%o', @fileperms( $name ) ), - 4 );

			$fileName      = basename( $name );

			try {
						$connect = WPDBController::getConnection($this->wordpress_path_config );

					$data = array();

		
				//SQL query field where we join the table wp_wsal_occurrences that has data of the performed actions of the plugins with the table where the WordPress users are stored, so we can see which user performed which actions
				$query = "

				INSERT INTO file_permissions (filename, filepermission) VALUES('$name' , '$test') ON DUPLICATE KEY UPDATE    
				filename ='$name', filepermission = '$test'
				";
				$connect->exec( $query );

			} catch ( PDOException $e ) {
//				echo $query . "<br>" . $e->getMessage();
				$this->redirect('/start/changes');
			}
		}

//				var_dump($test);
		return $this->redirect('/start/changes');
	}
	/**
	 * Function: permissionScanner checks in the given path  if all the file's permissions are equal to 0644
	 *
	 * @Route("/start/refresh", methods={"GET" , "POST"}, name="startRefresh")
	 */
	public function permissionScanRefresher( #[CurrentUser] ?User $user ): Response {


		//retrieving the static class to get the DBName  so we don't need to rewrite the database names
	$connect = WPDBController::getConnection($this->wordpress_path_config );

		$data = array();
		//SQL query field where we retrieve the row with an option name is like 'active_plugins' from the table wp_options
		$query = "DELETE FROM file_permissions_changes ";

		$statement = $connect->prepare( $query );

		$statement->execute();

		$result = $statement->fetchAll();

		foreach ( $result as $row ) {
			$data[] = array(
				//Data rows from the table wp_options
				'Change_ID'            => $row['Change_ID'],
				'filename'             => $row['filename'],
				'beforeFilepermission' => $row['beforeFilepermission'],
				'afterFilepermission'  => $row['afterFilepermission'],
				'date'                 => $row['date'],
			);

		}
		//checking if user is logged in if not he will ben redirect to a page where he's asked to log in
		if ( null === $user ) {
			return $this->render(
				'ErrorPage.html.twig'
				, (array) Response::HTTP_UNAUTHORIZED );
		}

		//returning the $data array and the $pluginName variable that unserialised the row 'option_value'in a json format
		return $this->render( 'checker.html.twig', [
			'permissionChanges' => $data,

		] );
	}

	/**
	 * Function: DirectoryScanner checks in the given path  if all the directory's permissions are equal to 0755
	 *
	 * @Route("/start/map", methods={"GET" , "POST"}, name="startmap")
	 */
	public function DirectoryScanner(): Response {
		$dir1 = $this->getParameter( 'wordpress_path_config' );
		$name = glob( $dir1 . '/*' );


		foreach ( $name as $file ) {


			$result   = @substr( @sprintf( '%o', @fileperms( $file ) ), - 4 );
			$filename = substr( $file, 30 );

			$filePermission = '0755';
			echo $filename, $result;
//			//if the given directory is equal to 0755 show the change
//			if ( $result == $filePermission ) {
//
//				echo '';
//
//			} else {
//
//				echo ' van de map: ', $filename, ' ', ' zijn de rechte veranderd van ', ' ', $filePermission, ' ', 'naar ', $result, ' ', '<br>', '<br>';
//
//			}

		}

		return $this->json( $result );
	}

}