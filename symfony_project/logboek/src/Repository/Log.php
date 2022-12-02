<?php

namespace App\Repository;

use Doctrine\ORM\Mapping as ORM;

/**
 * Log
 *
 * @ORM\Table(name="log", indexes={@ORM\Index(name="IDX_8F3F68C5A76ED395", columns={"user_id"})})
 * @ORM\Entity
 */
class Log
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nummer", type="text", length=0, nullable=false)
     */
    private $nummer;

    /**
     * @var array
     *
     * @ORM\Column(name="context", type="array", length=0, nullable=false)
     */
    private $context;

    /**
     * @var int
     *
     * @ORM\Column(name="level", type="smallint", nullable=false)
     */
    private $level;

    /**
     * @var array|null
     *
     * @ORM\Column(name="extra", type="array", length=0, nullable=true)
     */
    private $extra;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @var string
     *
     * @ORM\Column(name="level_name", type="string", length=50, nullable=false)
     */
    private $levelName;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;


}
