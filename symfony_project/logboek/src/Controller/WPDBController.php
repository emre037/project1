<?php

namespace App\Controller;

use PDO;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class WPDBController extends AbstractController
{
	public function __construct(string $wordpress_path_config)
	{
		$this->wordpress_path_config = $wordpress_path_config;
	}
	/**
	 * Function: getConnection creates the connection to the WordPress database
	 */
	public static function getConnection($wordpress_path_config): PDO
	{
		$rootLocation = $wordpress_path_config . '/wp-config.php';

		self::getConstantsFromFile($rootLocation);

		define('DB_NAME', 'emre_wordpress');

		/** Database username */
		define('DB_USER', 'root');

		/** Database password */
		define('DB_PASSWORD', '');

		/** Database hostname */
		define('DB_HOST', 'localhost');

		/** Database charset to use in creating database tables. */
		define('DB_CHARSET', 'utf8');

		/** The database collate type. Don't change this if in doubt. */
		define('DB_COLLATE', '');
		$DbName = DB_NAME;
		$DbHost = DB_HOST;

		$connect = new PDO("mysql:host=$DbHost;dbname=$DbName", DB_USER, DB_PASSWORD);

		return $connect;
	}

	public static function getConstantsFromFile($file)
	{
		$text = php_strip_whitespace($file);
		$text = str_replace(array('<?php', '<?', '?>'), '', $text);
		$lines = explode(";", $text);

		//extract constants from php code
		foreach ($lines as $line) {
			//skip blank lines
			if (strlen(trim($line)) == 0)
				continue;

			preg_match('/^define\((\'.*\'|".*"),( )?(.*)\)$/', trim($line), $matches, PREG_OFFSET_CAPTURE);

			if ($matches) {
				$constantName = substr($matches[1][0], 1, strlen($matches[1][0]) - 2);
				$constantValue = $matches[3][0];

				if (!defined($constantName)) {
					// Remove ' from value
					define($constantName, str_replace("'", "", $constantValue));
				}
			} else {
				continue;
			}
		}
	}
}
