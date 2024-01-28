import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './pages/Index.jsx'

import Vender from './pages/Vender.jsx'
import TipoVivienda from './components/venderahora/segundo/TipoVivienda.jsx'

import './styles/Tailwind.css'
import './styles/Main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/vender",
    element: <Vender />,
  },
  {
    path: "/sell",
    element: <TipoVivienda />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)