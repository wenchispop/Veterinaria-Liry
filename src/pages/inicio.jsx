
import Header from '../components/header'
import Footer from '../components/footer'
import Video from '../components/video'
import { NavLink } from 'react-router'
import '../index.css'

const Inicio = () => {
  return (
    <>
      <Header />
      <main>
        <Video />
        <section className="container my-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <div style={{ fontSize: '3rem' }}>🕒</div>
                <h5 className="card-title mt-3 fw-bold">Agendar Hora</h5>
                <p className="card-text text-muted">Todos los días</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <div style={{ fontSize: '3rem' }}>🩺</div>
                <h5 className="card-title mt-3 fw-bold">Especialidades</h5>
                <p className="card-text text-muted">Atención integral</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <div style={{ fontSize: '3rem' }}>🏥</div>
                <h5 className="card-title mt-3 fw-bold">Hospitalización</h5>
                <p className="card-text text-muted">Atención 24 horas</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-5">
          <h2 className="text-center text-primary mb-4">Productos Destacados</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-light text-dark h-100">
                <img src="/imagenProducto1.png" className="card-img-top" alt="Corona Plateada Con Perlas Blancas Para Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Corona Plateada Con Perlas Blancas Para Gatos</h5>
                  <p className="card-text">$7.990</p>
                  <button className="btn btn-success btn-agregar-carrito" type="button">🛒 Agregar</button>
                  <NavLink to="/detalle-producto?id=1" className="btn btn-primary">🔍 Ver detalle</NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card bg-light text-dark h-100">
                <img src="/imagenProducto2.png" className="card-img-top" alt="Mascara de Batman Talla XS Para Gatos Hasta 6 Meses" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Mascara de Batman Talla XS Para Gatos Hasta 6 Meses</h5>
                  <p className="card-text">$5.190</p>
                  <button className="btn btn-success btn-agregar-carrito" type="button">🛒 Agregar</button>
                  <NavLink to="/detalle-producto?id=2" className="btn btn-primary">🔍 Ver detalle</NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card bg-light text-dark h-100">
                <img src="/imagenProducto3.png" className="card-img-top" alt="Leonardo Lata para Gato" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Leonardo Lata para Gato</h5>
                  <p className="card-text">$4.900</p>
                  <button className="btn btn-success btn-agregar-carrito" type="button">🛒 Agregar</button>
                  <NavLink to="/detalle-producto?id=3" className="btn btn-primary">🔍 Ver detalle</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Inicio
