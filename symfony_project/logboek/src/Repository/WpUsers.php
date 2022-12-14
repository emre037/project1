<?php

namespace App\Repository;

use App\Entity\Calendar;
use Doctrine\ORM\Mapping as ORM;

/**
 * @method WpUsers|null find($id, $lockMode = null, $lockVersion = null)
 * @method WpUsers|null findOneBy(array $criteria, array $orderBy = null)
 * @method WpUsers[]    findAll()
 * @method WpUsers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
/**
 * WpUsers
 *
 * @ORM\Table(name="wp_users", indexes={@ORM\Index(name="user_login_key", columns={"user_login"}), @ORM\Index(name="user_email", columns={"user_email"}), @ORM\Index(name="user_nicename", columns={"user_nicename"})})
 * @ORM\Entity
 */
class WpUsers
{
    /**
     * @var int
     *
     * @ORM\Column(name="ID", type="bigint", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="user_login", type="string", length=60, nullable=false)
     */
    private $userLogin = '';

    /**
     * @var string
     *
     * @ORM\Column(name="user_pass", type="string", length=255, nullable=false)
     */
    private $userPass = '';

    /**
     * @var string
     *
     * @ORM\Column(name="user_nicename", type="string", length=50, nullable=false)
     */
    private $userNicename = '';

    /**
     * @var string
     *
     * @ORM\Column(name="user_email", type="string", length=100, nullable=false)
     */
    private $userEmail = '';

    /**
     * @var string
     *
     * @ORM\Column(name="user_url", type="string", length=100, nullable=false)
     */
    private $userUrl = '';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="user_registered", type="datetime", nullable=false, options={"default"="0000-00-00 00:00:00"})
     */
    private $userRegistered = '0000-00-00 00:00:00';

    /**
     * @var string
     *
     * @ORM\Column(name="user_activation_key", type="string", length=255, nullable=false)
     */
    private $userActivationKey = '';

    /**
     * @var int
     *
     * @ORM\Column(name="user_status", type="integer", nullable=false)
     */
    private $userStatus = '0';

    /**
     * @var string
     *
     * @ORM\Column(name="display_name", type="string", length=250, nullable=false)
     */
    private $displayName = '';


}
