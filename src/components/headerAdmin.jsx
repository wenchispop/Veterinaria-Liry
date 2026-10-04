import { NavLink } from 'react-router'

const HeaderAdmin = () => {
  return (
            <nav className="site-nav">
            <div className="nav-inner">
                <NavLink className="site-brand" to="/">🐈 Veterinaria Liry</NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/usuarios">👥 Gestionar Usuarios</NavLink></li>
                    <li><NavLink to="/agendarHora"> 📅 Gestionar Citas</NavLink></li>
                    <li><NavLink to="/iniciarSesion">🔐 Cerrar Sesión <span id="cart-count">0</span></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderAdmin