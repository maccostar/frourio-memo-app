import { createController } from 'frourio'
import { Methods } from './'
import { taskRepository } from '~/apis/@repos/tasks'

export default createController<Methods>({
  get: async () => ({
    status: 200,
    body: await taskRepository.getTasks()
  }),
  post: async ({ body }) => {
    const task = await taskRepository.createTasks(body.name)
    return { status: 201, body: task }
  }
})

/*
await (await fetch(`http://localhost:8080/api/tasks`, {
  // 既定のオプションには * が付いています
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({name: 'hoge'}), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
})).json()
*/
