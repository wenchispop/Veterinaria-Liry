
import Header from '../components/header'
import Footer from '../components/footer'

const IniciarSesion = () => {
  return (
    <>
      <Header />
      <main>
        {/* ===== FORMULARIO DE LOGIN ===== */}
        {/* Esta sección contiene los campos que permiten iniciar sesión en el sistema. */}
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
          <div className="card bg-secondary p-4" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>

            {/* Credenciales de prueba (mock) */}
            {/* Estos datos sirven para probar los roles de administrador y vendedor. */}
            <div className="alert alert-secondary text-dark small">
              <strong>Usuarios de prueba:</strong><br />
              admin@tienda.cl / 1234<br />
              vendedor@tienda.cl / 1234
            </div>

            {/* FORMULARIO */}
            {/* El formulario recopila el correo y la contraseña del usuario. */}
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="input-email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="input-email" placeholder="ejemplo@tienda.cl" required />
              </div>
              <div className="mb-3">
                <label htmlFor="input-password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="input-password" placeholder="****" required />
              </div>
              {/* Botón con id para enlazar con JS */}
              <button type="button" id="btn-inicio-sesion" className="btn btn-primary w-100">Ingresar</button>
            </form>

            {/* Mensaje de error (se muestra desde JS) */}
            {/* JavaScript utiliza este espacio para informar si los datos son incorrectos. */}
            <div id="loginError" className="text-danger mt-3 text-center" style={{ display: 'none' }}>
              ❌ Credenciales incorrectas. Intenta nuevamente.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default IniciarSesion
