import React from 'react';
import ReactDOM from 'react-dom/client';

import { AnimatePresence } from 'framer-motion';

import Index from './pages/Index.jsx';

import InformacionVivienda from './pages/Vender/InformacionVivienda.jsx';
import TipoVivienda from './pages/Vender/TipoVivienda.jsx';

import './styles/Tailwind.css';
import './styles/Main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/vender',
    element: <InformacionVivienda />
  },
  {
    path: '/vender/tipo',
    element: <TipoVivienda />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
