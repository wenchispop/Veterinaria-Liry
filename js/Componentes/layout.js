
class Footer extends HTMLElement {
    connectedCallback() {
        // El footer conserva la misma estructura de ancho que la barra superior.
        this.innerHTML = `
            <footer class="site-footer">
                <div class="nav-inner">
                    <p>© 2026 Veterinaria Liry - Todos los derechos reservados</p>
                </div>
            </footer>
        `;
    }
}

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="site-nav">
                <div class="nav-inner">
                    <a class="site-brand" href="index.html">🐈 Veterinaria Liry</a>
                    <ul class="nav-links">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="tienda.html">Tienda</a></li>
                        <!-- <li><a href="🩺 Servicios.html">Servicios</a></li> -->
                        <li><a href="login.html">🔑 Iniciar Sesión</a></li>
                        <li><a href="carrito.html">🛒 Carrito <span id="cart-count">0</span></a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

class NavbarAdmin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="site-nav">
                <div class="nav-inner">
                    <a class="site-brand" href="index.html">🐈 Veterinaria Liry</a>
                    <ul class="nav-links">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="usuarios.html">👥 Gestionar Usuarios</a></li>
                        <li><a href="citas.html">📅 Gestionar Citas</a></li>
                        <li><a href="../login.html">🔐 Cerrar Sesión</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', Navbar)
customElements.define('custom-navbaradmin', NavbarAdmin)
customElements.define('custom-footer', Footer)