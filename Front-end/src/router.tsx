import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Task } from './pages/Task'

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/task/:index',
        element: <Task/>
    }

])