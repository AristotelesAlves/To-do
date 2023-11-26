import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import { Home } from './pages/Home'
import { Task } from './pages/Task'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Task/>
  </React.StrictMode>,
)
