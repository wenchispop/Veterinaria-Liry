// =============================================
// 1. Obtener el botón por su id
// =============================================
// Se obtiene el botón para poder ejecutar la validación cuando se haga clic.
const botonInicioSesion = document.getElementById('btn-inicio-sesion');

// =============================================
// 2. Asignar el evento "click" al botón
// =============================================
// La función siguiente se ejecuta después de que el usuario presiona "Ingresar".
botonInicioSesion.addEventListener('click', function () {

    // =============================================
    // 3. Obtener los inputs
    // =============================================
    // Se buscan los campos que contienen el correo y la contraseña.
    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');

    // =============================================
    // 4. Validar que NO estén vacíos
    // =============================================
    // Se eliminan espacios innecesarios antes de comparar los datos.
    const email = inputEmail.value.trim();        // .trim() quita espacios al inicio/final
    const password = inputPassword.value.trim();

    if (email === '' || password === '') {
        alert('⚠️ Por favor, completa todos los campos.');
        return;   // Detiene la ejecución
    }

    // =============================================
    // 5. Validar las credenciales (usuario y contraseña)
    // =============================================
    // Se comparan los datos con las credenciales de prueba definidas para cada rol.

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