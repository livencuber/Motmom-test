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

    /**
     * @Route("/task/add", methods={"POST"})
     */
    public function tasksAddAction(Request $request)
    {

        $entityManager = $this->getDoctrine()->getManager();


        $task = new Tasks();
        $task->setName($request->request->get('name'));
        $task->setTime(new \DateTime($request->request->get('time')));

        $entityManager->persist($task);
        $entityManager->flush();

        return $this->json($task);
    }
}
