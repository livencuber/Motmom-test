<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Tasks;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiController extends Controller
{
    /**
     * @Route("/tasks", name="3")
     */
    public function tasksAction(Request $request)
    {
        $repository = $this->getDoctrine()
            ->getRepository(Tasks::class);

        $tasks = $repository->findAll();

        return $this->json($tasks);
    }
}
