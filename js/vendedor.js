// Obtenemos el rol del usuario desde localStorage
const rolUsuario = localStorage.getItem('rol_usuario')

// Preguntamos si el rol no es admin
if (rolUsuario != 'vendedor') {
    window.location = '../index.html'
}