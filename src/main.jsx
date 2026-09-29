import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Inicio from './pages/inicio.jsx'
import App from './App.jsx'
import Tienda from './pages/tienda.jsx'
import IniciarSesion from './pages/iniciarSesion.jsx'
import Carrito from './pages/carrito.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/test" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
