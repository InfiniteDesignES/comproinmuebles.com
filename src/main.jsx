import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './pages/Index.jsx'
import Contact   from './pages/Contact.jsx'
import InfoLegal from './pages/InfoLegal.jsx'

import './styles/Tailwind.css'
import './styles/Main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footertemporal from './components/Footertemporal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/legal-info",
    element: <InfoLegal/>,
  },
  {
    path: "/temporal",
    element: <Footertemporal/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)