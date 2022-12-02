<?php

namespace App\Utility;

use App\Utility\DbProcessor;
use App\Entity\Log;
use Doctrine\ORM\EntityManagerInterface;
use Monolog\Handler\AbstractProcessingHandler;
use Monolog\Handler\DoctrineCouchDBHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;


class DbHandler extends AbstractProcessingHandler
{
    private EntityManagerInterface $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct();
        $this->manager = $manager;
    }

    protected function write(array $record): void
    {
        //stuurt het naar de database
        $log = new Log();
//		$logger = new Logger('info');

        $log->setContext($record['context']);
        $log->setLevel($record['level']);
        $log->setLevelName($record['level_name']);
        $log->setnummer($record['message']);

        $log->setUser($record['extra']['user']);




        $this->manager->persist($log);
        $this->manager->flush();
    }


}