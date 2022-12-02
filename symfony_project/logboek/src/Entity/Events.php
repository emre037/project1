<?php

namespace App\Entity;

use App\Repository\EventsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventsRepository::class)
 */
class Events
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="datetime")
     */
    private $start_event;

    /**
     * @ORM\Column(type="datetime")
     */
    private $end_event;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStartEvent(): ?\DateTimeInterface
    {
        return $this->start_event;
    }

    public function setStartEvent(\DateTimeInterface $start_event): self
    {
        $this->start_event = $start_event;

        return $this;
    }

    public function getEndEvent(): ?\DateTimeInterface
    {
        return $this->end_event;
    }

    public function setEndEvent(\DateTimeInterface $end_event): self
    {
        $this->end_event = $end_event;

        return $this;
    }
}
