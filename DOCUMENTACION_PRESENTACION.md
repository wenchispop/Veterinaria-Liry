## Minuto 0 a 1: Presentación del problema - P
"Buenas Tardes. Nuestro proyecto se llama Veterinaria Liry.Nuestro objetivo fue crear una página web sencilla pero funcional que permita a cualquier persona conocer la veterinaria, revisar los productos disponibles, iniciar sesión y solicitar una hora. Además, dejamos una estructura base para el panel administrativo, donde el negocio puede gestionar usuarios y citas.

Es importante aclarar que esta es una versión frontend, sin backend ni base de datos, pero con toda la lógica simulada para que se vea y funcione como un sistema real."

##  Minuto 1 a 2: Tecnologías utilizadas - P

"Para construirlo usamos cuatro herramientas principales:

- HTML5 para la estructura de las páginas, con etiquetas semánticas como header, nav, main, section y footer.

- CSS3 para los estilos personalizados: colores, tipografías, el banner con video de fondo y los efectos hover.

- JavaScript para toda la lógica: el login con roles, el carrito de compras, la validación de formularios y la gestión de datos en localStorage.

- Bootstrap 5 desde CDN, que nos permitió trabajar más rápido con grillas, tarjetas, formularios y componentes responsive sin escribir tanto CSS.

No usamos backend ni base de datos en esta entrega. Todos los datos se guardan temporalmente en el navegador usando localStorage."

## Minuto 2 a 3: Estructura del proyecto - P
"El proyecto está organizado en carpetas para mantener el orden:

La raíz contiene las páginas públicas: index.html, tienda.html, detalle-producto.html, carrito.html, login.html y servicios.html.

La carpeta css contiene los estilos. Ahí está estilo.css para la tienda y admin.css exclusivo para el panel administrativo.

La carpeta js contiene los archivos JavaScript. Dentro está main.js con funciones comunes, productos.js con el arreglo de productos, login.js con la lógica de acceso y validaciones.js.

También creamos una subcarpeta js/Componentes donde está layout.js, que define el navbar y el footer como componentes reutilizables.

Finalmente, la carpeta admin contiene las vistas del panel: index.html, usuarios.html y citas.html, cada una con su propio JavaScript."

## Minuto 3 a 4: HTML semántico - P
"En el HTML usamos la estructura clásica de HTML5: el head para la configuración, enlaces a Bootstrap y nuestros estilos; y el body para todo el contenido visible.

Aprovechamos las etiquetas semánticas: header para el banner principal, nav para el menú de navegación, main para el contenido central, section para agrupar bloques como servicios o productos, y footer para el pie de página.

Un detalle importante: en vez de repetir el navbar y el footer en cada archivo, usamos componentes personalizados como <custom-navbar> y <custom-footer>. Esto hace que el código sea mucho más limpio y fácil de mantener."

## Minuto 4 a 5: Layout reutilizable con Web Components - A
"El archivo layout.js define clases que heredan de HTMLElement, lo que nos permite crear componentes personalizados.

Cuando el navegador encuentra la etiqueta <custom-navbar>, ejecuta el método connectedCallback e inserta automáticamente el HTML de la navegación. Lo mismo pasa con <custom-footer> y con el navbar del panel administrativo.

Esto tiene dos ventajas enormes: reducimos código repetido y, si necesitamos cambiar un enlace del menú, lo hacemos en un solo lugar y se actualiza en todas las páginas.

Además, el componente detecta si hay una sesión activa en localStorage y muestra el nombre del usuario o el botón de cerrar sesión según corresponda."

## Minuto 5 a 6: CSS personalizado - A
"Nuestro CSS propio controla tres cosas principales:

Primero, el navbar y el footer, con el color azul oscuro corporativo #022b7c que define la identidad visual de la veterinaria.

Segundo, el banner con video de fondo. El video se posiciona de forma absoluta ocupando todo el ancho, y el contenido de texto se coloca encima usando z-index. También añadimos una capa semitransparente con linear-gradient para que el texto blanco y amarillo se lea perfectamente.

Tercero, usamos Flexbox para ordenar el logo y los enlaces del menú, y una regla @media que adapta los botones del banner en pantallas pequeñas, haciendo que se apilen verticalmente y ocupen todo el ancho.

Todo esto está comentado paso a paso en el archivo estilo.css para que sea fácil de entender."

## Minuto 6 a 7: Bootstrap como base - A
"Bootstrap lo usamos en las partes donde nos ayuda a organizar rápidamente la interfaz.

Las clases container, row y col-md-4 construyen la distribución de las tarjetas de servicios y productos.

La clase card crea las tarjetas con imagen, título, precio y botón.

form-control y form-select mejoran la apariencia de los campos en formularios como el login o el registro de usuarios.

Y btn, btn-primary, btn-success nos dan botones consistentes y atractivos.

Las clases de Bootstrap reducen muchísimo el CSS necesario, pero mantuvimos nuestros estilos propios para el banner, el sidebar del admin y los detalles de identidad visual."

## Minuto 7 a 8: Login y roles - A
"El login es una de las partes más interesantes. Usamos JavaScript puro para leer los campos de correo y contraseña, y los comparamos contra un arreglo de usuarios mock definidos en el código.

Tenemos tres usuarios de prueba:

admin@duoc.cl con contraseña 1234 → redirige al panel de administración.

vendedor@duoc.cl con contraseña 1234 → redirige al panel del vendedor.

cliente@gmail.com con contraseña 1234 → redirige a la tienda.

Si las credenciales son correctas, guardamos el rol en localStorage y redirigimos según corresponda. Si son incorrectas, mostramos un mensaje de error.

Es importante recalcar que es una demostración frontend, no un sistema de seguridad real. Pero la lógica está lista para conectarse a un backend en el futuro."

## Minuto 8 a 9: Cierre y reflexión - P
"Para cerrar, me gustaría destacar que construimos una base visual ordenada y consistente. Todas las páginas comparten el mismo navbar, footer y paleta de colores, lo que da una sensación de profesionalismo.

Segundo, implementamos componentes reutilizables con Web Components, lo que demuestra que se puede escribir código limpio y mantenible incluso sin frameworks como React o Vue.

Como aprendizaje personal, este proyecto nos enseñó a trabajar en equipo con Git y GitHub, a dividir tareas por responsabilidad, y a resolver problemas de integración entre HTML, CSS y JavaScript.

¿Qué mejoraríamos en una próxima versión?

Conectar a una base de datos real.
Implementar un sistema de autenticación seguro con tokens.
Añadir más productos y categorías con filtros de búsqueda.
Mejorar la accesibilidad para usuarios con discapacidad visual.