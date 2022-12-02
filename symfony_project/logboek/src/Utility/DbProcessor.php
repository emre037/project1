<?php

namespace App\Utility;

use App\Entity\User;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class DbProcessor
{
    private $request;
    private $security;

    public function __construct(RequestStack $request, Security $security)
    {
        $this->request = $request->getCurrentRequest();
        $this->security = $security;
    }

    public function __invoke(array $record): array
    {

//	    $result  = @substr( @sprintf( '%o', @fileperms( $dir ) ), - 4 );
////        $user = $this->security->getUser();
////        $record['extra']['user'] = $user;
//	    $record['extra'] = $result;
//
//	    return $record;
        $user = $this->security->getUser();
        $record['extra']['user'] = $user;

        return $record;
    }
}