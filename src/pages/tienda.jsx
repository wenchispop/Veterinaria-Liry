
import Header from '../components/header'
import Footer from '../components/footer'

const Inicio = () => {
  return (
    <>
      <Header />
      <main>
            <div class="container my-5">
                <h1 class="text-center mb-4">📦 Todos los Productos</h1>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card bg-light text-dark h-100">
                            <img src="/imagenProducto1.png" class="card-img-top" alt="Corona Plateada Con Perlas Blancas Para Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div class="card-body">
                                <h5 class="card-title">Corona Plateada Con Perlas Blancas Para Gatos</h5>
                                <p class="card-text">$7.990</p>
                                <button class="btn btn-success btn-agregar-carrito" data-id="1" data-nombre="Corona Plateada Con Perlas Blancas Para Gatos" data-precio="7990" data-imagen="/imagenProducto1.png">🛒 Agregar</button>
                                <a href="detalle-producto.html?id=1" class="btn btn-primary">🔍 Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card bg-light text-dark h-100">
                            <img src="/imagenProducto2.png" class="card-img-top" alt="Mascara de Batman Talla XS Para Gatos Hasta 6 Meses" style={{ height: '200px', objectFit: 'cover' }} />
                            <div class="card-body">
                                <h5 class="card-title">Mascara de Batman Talla XS Para Gatos Hasta 6 Meses</h5>
                                <p class="card-text">$5.190</p>
                                <button class="btn btn-success btn-agregar-carrito" data-id="2" data-nombre="Mascara de Batman Talla XS Para Gatos Hasta 6 Meses" data-precio="5190" data-imagen="/imagenProducto2.png">🛒 Agregar</button>
                                <a href="detalle-producto.html?id=2" class="btn btn-primary">🔍 Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card bg-light text-dark h-100">
                            <img src="/imagenProducto3.png" class="card-img-top" alt="Leonardo Lata para Gato" style={{ height: '200px', objectFit: 'cover' }} />
                            <div class="card-body">
                                <h5 class="card-title">Leonardo Lata para Gato</h5>
                                <p class="card-text">$4.900</p>
                                <button class="btn btn-success btn-agregar-carrito" data-id="3" data-nombre="Leonardo Lata para Gato" data-precio="4900" data-imagen="/imagenProducto3.png">🛒 Agregar</button>
                                <a href="detalle-producto.html?id=3" class="btn btn-primary">🔍 Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card bg-light text-dark h-100">
                            <img src="/imagenProducto4.png" class="card-img-top" alt="Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div class="card-body">
                                <h5 class="card-title">Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos</h5>
                                <p class="card-text">$15.000</p>
                                <button class="btn btn-success btn-agregar-carrito" data-id="4" data-nombre="Cama BRNX con Forma de Hoja - Talla M para Perros y Gatos" data-precio="15000" data-imagen="/imagenProducto4.png">🛒 Agregar</button>
                                <a href="detalle-producto.html?id=4" class="btn btn-primary">🔍 Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card bg-light text-dark h-100">
                            <img src="/imagenProducto5.png" class="card-img-top" alt="Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div class="card-body">
                                <h5 class="card-title">Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos</h5>
                                <p class="card-text">$9.500</p>
                                <button class="btn btn-success btn-agregar-carrito" data-id="5" data-nombre="Churu Atun - Pote con 50 Unidades de Snack Cremoso para Gatos" data-precio="9500" data-imagen="/imagenProducto5.png">🛒 Agregar</button>
                                <a href="detalle-producto.html?id=5" class="btn btn-primary">🔍 Ver detalle</a>
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

export default Inicio
