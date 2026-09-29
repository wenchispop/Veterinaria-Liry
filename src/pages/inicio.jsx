
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
          <div className="row g-4">
            <div className="col-md-4">
                        <div className="card bg-light text-dark h-100">
                            <img src="/imagenProducto1.png" className="card-img-top p-3 pb-0" alt="Corona Plateada Con Perlas Blancas Para Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title">Corona Plateada Con Perlas Blancas Para Gatos</h5>
                                <p className="card-text text-muted">Corona decorativa con perlas blancas para gatos.</p>
                                <p className="card-text fw-bold">$7.990</p>
                                <button className="btn btn-success btn-agregar-carrito mt-auto align-self-start" data-id="1" data-nombre="Corona Plateada Con Perlas Blancas Para Gatos" data-precio="7990" data-imagen="/imagenProducto1.png">🛒 Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light text-dark h-100">
                            <img src="/imagenProducto2.png" className="card-img-top p-3 pb-0" alt="Mascara de Batman Talla XS Para Gatos Hasta 6 Meses" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title">Mascara de Batman Talla XS Para Gatos Hasta 6 Meses</h5>
                                <p className="card-text text-muted">Disfraz talla XS, ideal para gatos de hasta 6 meses.</p>
                                <p className="card-text fw-bold">$5.190</p>
                                <button className="btn btn-success btn-agregar-carrito mt-auto align-self-start" data-id="2" data-nombre="Mascara de Batman Talla XS Para Gatos Hasta 6 Meses" data-precio="5190" data-imagen="/imagenProducto2.png">🛒 Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light text-dark h-100">
                            <img src="/imagenProducto3.png" className="card-img-top p-3 pb-0" alt="Leonardo Lata para Gato" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title">Leonardo Lata para Gato</h5>
                                <p className="card-text text-muted">Alimento húmedo para consentir a tu gato.</p>
                                <p className="card-text fw-bold">$4.900</p>
                                <button className="btn btn-success btn-agregar-carrito mt-auto align-self-start" data-id="3" data-nombre="Leonardo Lata para Gato" data-precio="4900" data-imagen="/imagenProducto3.png">🛒 Agregar al carrito</button>
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
