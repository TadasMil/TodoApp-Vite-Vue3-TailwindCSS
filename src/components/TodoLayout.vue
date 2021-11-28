<script setup name="TodoLayout">
import { ref } from 'vue'
import { todos } from '../api/todos.js'
import { useErrorHandling } from '../composables/useErrorHandling.js'
import { useLoading } from '../composables/useLoading.js'
import { modals } from '../composables/useModal.js'

import TodoList from './TodoList.vue'
import Loading from './Loadings/Loading.vue'
import NewTodo from './NewTodo.vue'

const todosList = ref([])
const { error, setError } = useErrorHandling()
const { isLoading, setStateLoading, setStateIdle } = useLoading()

const getTodos = () => {
  setStateLoading()

  todos.get().then((res) => {
    handleHTTPValidity(res, () => (todosList.value = res))
  })
}

const handleHTTPValidity = (res, cb) => {
  if (res.status) {
    setError(res.status)
    setStateIdle()
    modals.httpError(error)
    return
  }

  setStateIdle()
  cb()
}

const responseModalForTaskMark = (completed) => {
  if (completed) {
    modals.success('Task marked as completed')
  } else {
    modals.success('Task marked as uncompleted')
  }
}

const markAsCompleted = (id, todoItem) => {
  todos.update(id, todoItem).then((res) => {
    handleHTTPValidity(res, () => {
      responseModalForTaskMark(res.completed)
    })
  })
}

const isTodoFromJSONPlaceholderDB = (todo) => !!todo.userId

const setTodoAsCompleted = (id) => {
  setStateLoading()

  todosList.value = todosList.value.map((todo) => {
    if (todo.id === id) {
      const todoItem = { ...todo, completed: !todo.completed }

      if (isTodoFromJSONPlaceholderDB(todo)) {
        todo.completed = !todo.completed
        markAsCompleted(id, todoItem)
      } else {
        todo.completed = !todo.completed
        responseModalForTaskMark(todo.completed)
        setStateIdle()
      }
    }

    return todo
  })
}

const insertTodo = (todo) => {
  const todoItem = { title: todo, completed: false, id: Date.now() }

  setStateLoading()

  todos.insert(todoItem).then((res) => {
    handleHTTPValidity(res, () => {
      todosList.value.unshift(todoItem)
      modals.success('Task added')
    })
  })
}

const deleteTodo = (id) => {
  setStateLoading()

  todosList.value = todosList.value.filter((todo) => {
    if (id === todo.id) {
      if (isTodoFromJSONPlaceholderDB(todo)) {
        todos.delete(todo.id).then((res) => {
          handleHTTPValidity(res, () => {
            modals.success('Task deleted')
          })
        })
      } else {
        modals.success('Task deleted')
        setStateIdle()
      }
    }

    return id !== todo.id
  })
}

const openAddTodoModal = () => {
  modals.addTodo(insertTodo)
}

const openDeleteModal = (id) => {
  modals.deleteTodo(() => deleteTodo(id))
}

getTodos()
</script>

<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <TodoList
      v-for="todo in todosList"
      :key="todo.id"
      v-bind="todo"
      @complete="setTodoAsCompleted"
      @delete="openDeleteModal"
    />
    <NewTodo @add="openAddTodoModal" />
  </div>
</template>
