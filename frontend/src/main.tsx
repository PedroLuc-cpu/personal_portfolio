import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'


// import React Router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"footer",
        element:<Footer/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
