import React, { useState } from 'react'

// TS model
import TodoType from '../typeModels/todo'

/**
 * Todo Context
 */
type todoContextType = {
  items: TodoType[]
  addTodo: (todoText: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<todoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {}
})

/**
 * Todo Context Provider component
 */
interface Props {
  children: React.ReactNode
}

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todoItems, setTodoItems] = useState<TodoType[]>([])

  const addNewTodoItem = (todoText: string) => {
    setTodoItems((state) => {
      return state.concat(new TodoType(todoText))
    })
  }

  const removeTodoItemHandler = (id: string) => {
    setTodoItems((state) => {
      return state.filter((item) => item.id !== id)
    })
  }

  const contextValue: todoContextType = {
    items: todoItems,
    addTodo: addNewTodoItem,
    removeTodo: removeTodoItemHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
