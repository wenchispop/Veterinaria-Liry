// Obtenemos el rol de user desde localStorage
const rolUsuario = localStorage.getItem('rol_usuario')

//Preguntar si el rol no es admin
if(rolUsuario != 'admin'){
    window.location = 'index.html'
    alert("No eres admin")
}