// Obtener el botón por id
const botonInicioSesion = document.getElementById('btn-inicio-sesion')

//Asignar el evento click al boton
botonInicioSesion.addEventListener('click',function () {
    // Obtenemos el input del correo
    const inputEmail = document.getElementById('input-email')
    // Obtenemos el input de la contraseña
    const inputPassword = document.getElementById('input-password')

    //Falta agregar validaciones donde vea que los valores no viene vacios

    // Obtenemos el correo y guardarlo en una variable
    const email = inputEmail.value
    // Obtenemos la contraseña y guardarlo en una variable
    const password = inputPassword.value

    if (email === 'admin@tienda.cl'){
        //Lo mandamos a admin/index.html
        window.location = 'admin/index.html'
        //asignar el rol de admin
        localStorage.setItem('rol_usuario','admin')
    } else if(email === 'vendedor@tienda.cl'){
        //Lo mandamos a admin/vendedor.html
        window.location = 'admin/vendedor.html'|
        //asignar el rol de vendedor
        localStorage.setItem('rol_usuario','vendedor')
    }else{
        alert("Credenciales incorrectas")
    }

})