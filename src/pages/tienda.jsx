
import Header from '../components/header'
import Footer from '../components/footer'

const Tienda = () => {
  return (
    <>
      <Header />
      <main>
            <div className="container my-5">
                <h1 className="text-center mb-4">📦 Todos los Productos</h1>
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
                    <div className="col-md-4">
                        <div className="card bg-light text-dark h-100">
                            <img src="/imagenProducto4.png" className="card-img-top p-3 pb-0" alt="Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title">Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos</h5>
                                <p className="card-text text-muted">Cama con forma de hoja, talla M para perros y gatos.</p>
                                <p className="card-text fw-bold">$15.000</p>
                                <button className="btn btn-success btn-agregar-carrito mt-auto align-self-start" data-id="4" data-nombre="Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos" data-precio="15000" data-imagen="/imagenProducto4.png">🛒 Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light text-dark h-100">
                            <img src="/imagenProducto5.png" className="card-img-top p-3 pb-0" alt="Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title">Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos</h5>
                                <p className="card-text text-muted">Snack cremoso de atún con 50 unidades para gatos.</p>
                                <p className="card-text fw-bold">$9.500</p>
                                <button className="btn btn-success btn-agregar-carrito mt-auto align-self-start" data-id="5" data-nombre="Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos" data-precio="9500" data-imagen="/imagenProducto5.png">🛒 Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


      </main>

      <Footer />
    </>
  )
}

export default Tienda
