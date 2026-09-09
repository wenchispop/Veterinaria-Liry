// =============================================
// 1. Obtener el botón por su id
// =============================================
const botonInicioSesion = document.getElementById('btn-inicio-sesion');

// =============================================
// 2. Asignar el evento "click" al botón
// =============================================
botonInicioSesion.addEventListener('click', function () {

    // =============================================
    // 3. Obtener los inputs
    // =============================================
    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');

    // =============================================
    // 4. Validar que NO estén vacíos
    // =============================================
    const email = inputEmail.value.trim();        // .trim() quita espacios al inicio/final
    const password = inputPassword.value.trim();

    if (email === '' || password === '') {
        alert('⚠️ Por favor, completa todos los campos.');
        return;   // Detiene la ejecución
    }

    // =============================================
    // 5. Validar las credenciales (usuario y contraseña)
    // =============================================

    // Caso 1: Admin
    if (email === 'admin@tienda.cl' && password === '1234') {
        // Guardar el rol en localStorage (para saber quién está logueado)
        localStorage.setItem('rol_usuario', 'admin');
        // Redirigir al panel de administración
        window.location = 'admin/index.html';
        return;
    }

    // Caso 2: Vendedor
    if (email === 'vendedor@tienda.cl' && password === '1234') {
        localStorage.setItem('rol_usuario', 'vendedor');
        window.location = 'vendedor/index.html';
        return;
    
    } else {
        alert("Credenciales incorrectas")
    }
});