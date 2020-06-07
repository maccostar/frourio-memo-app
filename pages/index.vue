<template>
  <div class="container">
    <div v-if="!$fetchState.pending">
      <h1 class="title">
        frourio-app
      </h1>
      <h2 class="subtitle">
        Nuxt.ts + frourio project
      </h2>
      <input
        type="text"
        name="taskname"
        v-model="taskname"
        @keyup.enter="createTask(taskname),deleteTaskName()"
      />
      <div>{{tasks.length}}個のタスクが登録されています。</div>
      <div v-if="tasks.length > 0">
        <div v-for="task in tasks" :key="task.id" class="wrapper">
          {{ task.id }}
          <input type="checkbox" name="done" :checked="task.done" @click="checkTask(task)"/>
          <div v-if="isEditting(task.id)">
            <input
              type="text"
              name="taskname"
              v-model="newName"
              @keyup.enter="changeTaskName(task, newName)"
            />
          </div>
          <div v-else>
            {{ task.name }}
          </div>
          <button v-if="!isEditting(task.id)" @click="startEdit(task)">編集する</button>
          <button @click="deleteTask(task.id)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Task } from '~/apis/@types'

export default Vue.extend({
  data():{
      tasks:Task[],
      taskname: string,
      edittingIds: number[],
      newName: string
    } {
    return {
      tasks: [],
      taskname: '',
      edittingIds: [],
      newName: ''
    }
  },
  async fetch() {
    this.tasks = await this.$api.tasks.$get()
    this.edittingIds = []
  },
  methods: {
    async createTask(name: string) {
      await this.$api.tasks.$post({data: {name}})
      this.tasks = await this.$api.tasks.$get()
    },
    async updateTask(task: Task) {
      await this.$api.tasks._taskId(task.id).$put({data: task})
      this.tasks = await this.$api.tasks.$get()
    },
    async deleteTask(id: number) {
      await this.$api.tasks._taskId(id).$delete()
      this.tasks = await this.$api.tasks.$get()
    },
    isEditting(id:number) {
      return this.edittingIds.includes(id)
    },
    startEdit(task: Task) {
      this.edittingIds.push(task.id)
      this.newName = task.name
    },
    deleteTaskName() {
      this.taskname = ""
    },
    checkTask(task: Task) {
      task.done = !task.done
      this.updateTask(task)
    },
    changeTaskName(task: Task, newName:string) {
      task.name = newName
      this.updateTask(task)
      this.edittingIds = []
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.wrapper {
  display: flex;
}
</style>
