import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Admision from '../src/pages/routes/Admision.jsx'
import Carreras from '../src/pages/routes/Carreras.jsx'
import Contactanos from './pages/routes/Contactanos.jsx'
import Inicio from './pages/routes/Contactanos.jsx'
import Nosotros from './pages/routes/Contactanos.jsx'
import Noticias from './pages/routes/Contactanos.jsx'


const router = createBrowserRouter ([
  {
    path : "/",
    element: <App/>
  },

  {
    path : "/admision",
    element : <Admision/>
  },
  {
    path: '/carreras',
    element: <Carreras/>
  },
  {
    path: '/contactanos',
    element: <Contactanos/>
  },
  {
    path: '/inicio',
    element: <Inicio/>
  },
  {
    path: '/nosotros',
    element: <Nosotros/>
  },
  {
    path: '/noticias',
    element: <Noticias/>
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
