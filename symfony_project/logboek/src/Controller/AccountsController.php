<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;


class AccountsController extends AbstractController {

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
	

}
