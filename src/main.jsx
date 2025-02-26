import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layout/Auth/AuthLayout.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import Register from './pages/Register/Register.jsx'
import RequierAuth from './helper/RequierAuth/RequierAuth.jsx'

const routes  = createBrowserRouter([
  {
    path:"/",
    element:<RequierAuth/>
  },
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {
        path:"login",
        element:<LoginPage/>
      },
      {
        path:"register",
        element:<Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
