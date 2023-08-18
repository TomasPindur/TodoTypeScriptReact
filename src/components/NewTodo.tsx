import { useRef, useContext, useState } from 'react'

// Context
import { TodosContext } from '../store/todos-context'

// CSS
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const todoCtx = useContext(TodosContext)
  const [hasError, setHasError] = useState(false)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      setHasError(true)
      return
    }

    todoCtx.addTodo(enteredText)

    todoTextInputRef.current!.select()
  }

  const changeTextInputHandler = () => {
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="textInput">Zadejte Todo text:</label>
      <input
        ref={todoTextInputRef}
        onInput={changeTextInputHandler}
        id="textInput"
        type="text"
        className={hasError ? classes.invalid : ''}
      />
      {hasError && (
        <p className={classes.errorMessage}>Todo text nesmí být prázdný!</p>
      )}
      <button type="submit">Přidat</button>
    </form>
  )
}

export default NewTodo
