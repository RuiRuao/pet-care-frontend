import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Form from "./components/Form.jsx"
import Details from "./components/Details.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/new-pet",
    element: <Form />
  },
  {
    path:"/",
    element: <App />
  },
  {
    path:"/details",
    element: <Details />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <createBrowserRouter>
      <RouterProvider router={router}/>
    </createBrowserRouter>
  </React.StrictMode>,
)
