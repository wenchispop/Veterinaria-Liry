// Obtenemos el rol del usuario guardado durante el inicio de sesión.
const rolUsuario = localStorage.getItem('rol_usuario')
// Esta variable puede utilizarse para controlar el acceso a las páginas administrativas.

//Preguntar si el rol no es admin
// if(rolUsuario != 'admin'){
//     window.location = 'index.html'
//     alert("No eres admin")
//     window.location.href = '../login.html';
// }
