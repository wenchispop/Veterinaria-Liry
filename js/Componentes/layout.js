
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="navbar-background text-white py-4 mt-5">
                <div class="container text-center">
                    <p class="mb-0">© 2026 Veterinaria Liry - Todos los derechos reservados</p>
                </div>
            </footer>
        `
    }
}

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark navbar-background">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="index.html">
                        🐾 Veterinaria Liry
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link active" href="index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link active" href="tienda.html">Tienda</a></li>
                            <li class="nav-item"><a class="nav-link active" href="servicios.html">Servicios</a></li>
                            <li class="nav-item"><a class="nav-link active" href="login.html">🔑 Iniciar Sesión</a></li>
                            <li class="nav-item">
                                <a class="nav-link active" href="carrito.html">
                                    🛒 Carrito
                                    <span id="cart-count" class="badge bg-warning text-dark">0</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

class NavbarAdmin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark navbar-background">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="index.html">
                        🐾 Veterinaria Liry
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link active" href="index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link active" href="usuarios.html">👥 Gestionar Usuarios</a></li>
                            <li class="nav-item"><a class="nav-link active" href="citas.html">📅 Gestionar Citas</a></li>
                            <li class="nav-item"><a class="nav-link active" href="../login.html">🔐 Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

customElements.define('custom-navbar', Navbar)
customElements.define('custom-navbaradmin', NavbarAdmin)
customElements.define('custom-footer', Footer)