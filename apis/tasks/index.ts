import { Task } from '~/apis/@types'
export type Methods = {
  get: {
    resBody: Task[]
  }
  post: {
    reqBody: Pick<Task, 'name'>
    resBody: Task
  }
}
