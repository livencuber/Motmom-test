<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Tasks;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiController extends Controller
{
    /**
     * @Route("/tasks")
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

    /**
     * @Route("/task/{id}/", methods={"DELETE"})
     */
    public function tasksDeleteAction(Request $request)
    {

        $entityManager = $this->getDoctrine()->getManager();

        $task = $entityManager->getRepository(Tasks::class)->find($request->attributes->get('id'));

        $entityManager->remove($task);
        $entityManager->flush();

        return new Response();
    }

    /**
     * @Route("/tasks/time/", methods={"POST"})
     */
    public function tasksChangeTimeAction(Request $request)
    {

        $entityManager = $this->getDoctrine()->getManager();

        $taskIds = $request->request->get('tasks');

        $tasks = [];
        foreach ($taskIds as $taskId) {

            $task = $entityManager->getRepository(Tasks::class)->find($taskId);
            $task->setTime(new \DateTime($request->request->get('time')));
            $entityManager->persist($task);
            $tasks[] = $task;

        }

        $entityManager->flush();

        return $this->json($tasks);
    }


}
