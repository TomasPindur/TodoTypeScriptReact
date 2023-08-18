import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'
import TodosContextProvider from './store/todos-context'

// CSS
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
)
