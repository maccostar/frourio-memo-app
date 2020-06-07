import { createController } from 'frourio'
import { Values } from './$values'
import { Methods } from './'
import { taskRepository } from '~/apis/@repos/tasks'

export default createController<Methods, Values>({
  put: async ({ body, params }) => {
    const task = {
      id: params.taskId,
      name: body.name,
      done: body.done
    }
    await taskRepository.updateTasks(task)
    return { status: 204 }
  },
  delete: async ({ params }) => {
    await taskRepository.deleteTasks(params.taskId)
    return { status: 204 }
  }
})
