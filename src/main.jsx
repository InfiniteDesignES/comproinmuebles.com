import React from 'react';
import ReactDOM from 'react-dom/client';

import { AnimatePresence } from 'framer-motion';

import Index from './pages/Index.jsx';
import Index from './pages/Index.jsx'
import InformacionVivienda from './components/InformacionVivienda.jsx'
import TipoVivienda from './components/TipoVivienda.jsx'
import RelacionExterior from './components/RelacionExterior.jsx'
import EspaciosPrincipalesBoton from './components/EspaciosPrincipalesBoton.jsx'
import Vender from './pages/Vender.jsx'
import TipoVivienda from './components/venderahora/segundo/TipoVivienda.jsx'

import InformacionVivienda from './pages/Vender/InformacionVivienda.jsx';
import TipoVivienda from './pages/Vender/TipoVivienda.jsx';

import './styles/Tailwind.css';
import './styles/Main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EspaciosPrincipales from './components/EspaciosPrincipales.jsx'
import EspaciosComunes from './components/EspaciosComunes.jsx'
import EstadoVivienda from './components/EstadoVivienda.jsx'
import PorqueVender from './components/PorqueVender.jsx'
import EnviarContacto from './components/EnviarContacto.jsx'
import MetrosCuadrados from './components/MetrosCuadrados.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/vender',
    element: <InformacionVivienda />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
