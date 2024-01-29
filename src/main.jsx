import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './pages/Index.jsx'
import InformacionVivienda from './components/InformacionVivienda.jsx'
import TipoVivienda from './components/TipoVivienda.jsx'
import RelacionExterior from './components/RelacionExterior.jsx'
import EspaciosPrincipalesBoton from './components/EspaciosPrincipalesBoton.jsx'

import './styles/Tailwind.css'
import './styles/Main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EspaciosPrincipales from './components/EspaciosPrincipales.jsx'
import EspaciosComunes from './components/EspaciosComunes.jsx'
import EstadoVivienda from './components/EstadoVivienda.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sell",
    element: <EstadoVivienda />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)