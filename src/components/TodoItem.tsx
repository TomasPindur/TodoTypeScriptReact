import React from 'react'

// CSS
import classes from './TodoItem.module.css'

type PropsComponentType = {
  text: string
  onRemoveTodoItem: () => void
}

const TodoItem: React.FC<PropsComponentType> = (props) => {
  const removeItemHandler = () => {
    props.onRemoveTodoItem()
  }

  return (
    <li className={classes.item} onClick={removeItemHandler}>
      {props.text}
    </li>
  )
}

export default TodoItem
