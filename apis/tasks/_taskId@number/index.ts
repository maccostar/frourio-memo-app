import { Task } from '~/apis/@types'
export type Methods = {
  put: {
    reqBody: Task
    status: 204
  }
  delete: {
    status: 204
  }
}
