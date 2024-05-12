import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import Diseño from './pages/routes/Carreras/Diseño/Diseño.jsx'
import Protesis from './pages/routes/Carreras/Protesis/Protesis.jsx'
import Contabilidad  from './pages/routes/Carreras/Contabilidad/Contabilidad.jsx'
import Admision from './pages/routes/Admision/Examen2024.jsx'
import Nosotros from './pages/routes/Nosotros/Nosotros.jsx'
import Contactanos from '../src/pages/routes/Contactanos/Contactanos.jsx'
import Noticias from './pages/routes/Noticias/Noticias.jsx'



const router = createBrowserRouter ([
  {
    path : "/",
    element: <App/>
  },
  {
    path:"/nosotros",
    element: <Nosotros/>
  },

  {
    path: "/protesis",
    element: <Protesis/>
  },

  {
    path : "/diseño",
    element: <Diseño/>
  },

  {
    path : "/contabilidad",
    element: <Contabilidad/>
  },

  {
    path: "/examen",
    element: <Admision/>
  },

  {
    path: "/blog",
    element: <Noticias/>
    },


  {
    path: '/contactanos',
    element: <Contactanos/>
  },
  
 


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
