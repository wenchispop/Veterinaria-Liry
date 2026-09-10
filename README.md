# Documentación técnica.
## Veterinaria Liry

## 1. Idea general del proyecto

Veterinaria Liry es una aplicacion web sencilla para mostrar los servicios de una veterinaria, presentar productos y permitir el acceso a distintas areas del sistema.

El proyecto se organiza con tecnologías básicas de frontend:

- HTML: estructura y contenido de las paginas.
- CSS: colores, posiciones, tamaños y apariencia propia.
- JavaScript: componentes reutilizables, validacion del login y control de roles.
- Bootstrap 5: estilos prediseñados para formularios, tarjetas y distribución responsive.

La aplicacion funciona como un proyecto frontend. No tiene una base de datos ni un servidor backend conectado.

## 2. Estructura de carpetas

```
Veterinaria-Liry/
|-- index.html
|-- tienda.html
|-- login.html
|-- agendarHora.html
|-- carrito.html
|-- css/
|   |-- estilo.css
|   |-- admin.css
|-- js/
|   |-- login.js
|   |-- admin.js
|   |-- vendedor.js
|   |-- main.js
|   |-- Componentes/
|       |-- layout.js
|-- admin/
|   |-- index.html
|   |-- usuarios.html
|   |-- citas.html
|   |-- vendedor.html
|-- img/
```
```
    *                  *
        __-                *
     ,db'    *     *
    ,d8/       *        *    *
    888
    `db\       *     *
      `o`_                    **
 *        -       *   *         *
       *                 / )
    *    (\__/) *       ( (  *
 | @|  ={      }= | @|  / / | @|o |
_j__j__j_)     `-------/ /__j__j__j_
________(               /___________
 |  | @| \              || o|O | @|
 |o |  |,'\       ,   ,'"|  |  |  |  
vV\|/vV|`-'\  ,---\   | \Vv\hjwVv\//v
            ) )    `. \ /
          (__/       ) )
                    (_/
```
