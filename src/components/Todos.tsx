import React, {useContext} from 'react'

// Context
import { TodosContext } from '../store/todos-context'

// Components
import TodoItem from './TodoItem'

// CSS
import classes from './Todos.module.css'

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodoItem={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
