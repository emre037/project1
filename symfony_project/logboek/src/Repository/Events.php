<?php

namespace App\Repository;

use Doctrine\ORM\Mapping as ORM;

/**
 * Events
 *
 * @ORM\Table(name="events", indexes={@ORM\Index(name="plugin", columns={"option_id"})})
 * @ORM\Entity
 */
class Events
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
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_event", type="datetime", nullable=false)
     */
    private $startEvent;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end_event", type="datetime", nullable=false)
     */
    private $endEvent;

    /**
     * @var \WpOptions
     *
     * @ORM\ManyToOne(targetEntity="WpOptions")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="option_id", referencedColumnName="option_id")
     * })
     */
    private $option;


}
