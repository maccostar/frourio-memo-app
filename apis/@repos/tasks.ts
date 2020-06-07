import fs from 'fs'
import { Task } from '~/apis/@types'

const filename = 'database.json'
if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, '[]', 'utf-8')
}
const readFile = async (): Promise<Task[]> =>
  JSON.parse(await fs.promises.readFile(filename, 'utf-8'))
const writeFile = async (newTasks: Task[]) =>
  await fs.promises.writeFile(filename, JSON.stringify(newTasks), 'utf-8')
export const taskRepository = {
  getTasks: () => readFile(),
  createTasks: async (name: string) => {
    const tasks = await readFile()
    const newId =
    tasks.length > 0
        ? Math.max(...tasks.map((task: Task) => task.id)) + 1
        : 0
    const task = { id: newId, name, done: false }
    tasks.push(task)
    writeFile(tasks)
    return task
  },
  updateTasks: async (updatedTask: Task) => {
    let tasks = await readFile()
    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
    writeFile(tasks)
  },
  deleteTasks: async (taskId: number) => {
    let tasks = await readFile()
    tasks = tasks.filter((task) => task.id !== taskId)
    writeFile(tasks)
  }
}
/*
  let tasks: Task[] = []
  export const taskRepository = {
    getTasks: () => tasks,
    createTasks: (name: string) => {
      const newId =
        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0
      const task = { id: newId, name, done: false }
      tasks.push(task)
      return task
    },
    updateTasks: (updatedTask: Task) => {
      tasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    },
    deleteTasks: (taskId: number) => {
      tasks = tasks.filter((task) => task.id !== taskId)
    }
  }
*/
