// ========== PRODUCTOS MOCK ==========
const productos = [
    {
        id: 1,
        nombre: "Croquetas Premium",
        precio: 15000,
        imagen: "https://via.placeholder.com/200x200?text=Croquetas",
        descripcion: "Alimento balanceado para perros adultos."
    },
    {
        id: 2,
        nombre: "Juguete Cuerda",
        precio: 8000,
        imagen: "https://via.placeholder.com/200x200?text=Juguete",
        descripcion: "Cuerda de algodón para morder y jugar."
    },
    {
        id: 3,
        nombre: "Shampoo Hipoalergénico",
        precio: 12000,
        imagen: "https://via.placeholder.com/200x200?text=Shampoo",
        descripcion: "Limpieza suave para pieles sensibles."
    },
    {
        id: 4,
        nombre: "Cama Ortopédica",
        precio: 35000,
        imagen: "https://via.placeholder.com/200x200?text=Cama",
        descripcion: "Cama con espuma de memoria para perros mayores."
    },
    {
        id: 5,
        nombre: "Correa Extensible",
        precio: 9500,
        imagen: "https://via.placeholder.com/200x200?text=Correa",
        descripcion: "Correa de hasta 5 metros, ideal para paseos."
    }
];

// ========== FUNCIÓN PARA LISTAR PRODUCTOS ==========
function mostrarProductos(contenedorId, limite = null) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    // Si límite es null, mostrar todos; si no, solo los primeros 'limite'
    const lista = limite ? productos.slice(0, limite) : productos;

    // Generar HTML de cada producto
    contenedor.innerHTML = lista.map(p => `
        <div class="col-md-4 mb-4">
            <div class="card bg-dark text-white h-100">
                <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">$${p.precio.toLocaleString()}</p>
                    <a href="detalle-producto.html?id=${p.id}" class="btn btn-primary">🔍 Ver detalle</a>
                    <button class="btn btn-success mt-2 w-100" onclick="agregarAlCarrito(${p.id})">
                        🛒 Añadir
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== FUNCIÓN PARA OBTENER PRODUCTO POR ID ==========
function obtenerProductoPorId(id) {
    return productos.find(p => p.id === id);
}