<?php

namespace App\Controller;

use PDO;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    /**
     * @Route("/home", methods={"GET" , "POST"}, name="app_home")
     */
    public function index(LoggerInterface $dbLogger ): Response
    {
//	echo $this->getParameter('root.path_config');
		//returning the homepage file
//       $dbLogger->info('Meneer Roesink');
        return $this->render('index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

}

