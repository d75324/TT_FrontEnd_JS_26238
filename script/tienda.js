// obtener los productos de fakestoreapi

const API_URL = 'https://fakestoreapi.com/products'
let productosGlobales = [];

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        productosGlobales = data;
        dibujarProductos(productosGlobales);
    })

//  2 Generar el HTML de los productos y mostrarlos en la página
// usar substring para acortar el título y concatenar los 3 puntitos ...
// toFixed para mostrar solo 2 dígitos

function crearCardProducto(producto) {
    const titulo = producto.title.substring(0, 20) + '...';
    return `
        <div class="producto">
            <img src="${producto.image}" alt="${producto.title}">
            <div class="producto-descripcion">
                <span>${producto.category}</span>
                <h5>${titulo}</h5>
                <h4>$${producto.price.toFixed(2)}</h4>
            </div>
            <a id="btn-ver-${producto.id}" class="ver-descripcion">
                Ver descripción
            </a>
            <a id="btn-agregar-${producto.id}" class="carrito">
                <i class="fal fa-shopping-cart"></i> Agregar
            </a>
        </div>
    `;
}

// 3 insertar productos en DOM
// productos-container es la clase en el div de la tienda.
// usamos map, que devuelve un array *** map devuelve un array ***
// con join eliminamos las comas que delimitan el array

function dibujarProductos(productos) {
    const contenedor = document.querySelector('.productos-container');
    contenedor.innerHTML = productos.map(p => crearCardProducto(p)).join("");
    adjuntarEventos();
}

// 4 evento click para cada boton agregar
// dos nuevas funciones agregarAlCarrito y abrirModal

function adjuntarEventos() {
    productosGlobales.forEach(producto => {

        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) {
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto)
            })
        }

        const btnVer = document.getElementById(`btn-ver-${producto.id}`);
        if (btnVer) {
            btnVer.addEventListener('click', () => { abrirModal(producto) });
        }

    })
}

// funcion agregar al carrito
// findIndex() en JavaScript busca dentro de un array y devuelve la posición (índice) del primer elemento que cumpla con una condición. Si ningún elemento cumple la condición, devuelve -1.

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
    const indiceExistente = carrito.findIndex(item => item.id === producto.id);

    if (indiceExistente !== -1) {
        carrito[indiceExistente].cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            title: producto.title,
            price: producto.price,
            image: producto.image,
            cantidad: 1
        })
    }
// El método setItem() guarda un par clave-valor en localStorage o sessionStorage, o actualiza el valor si la clave ya existe.

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
// mostrar el toast con substring para acortar el title
    mostrarToast(`${producto.title.substring(0, 20)}... agregado al carrito`);

}

// modal: toma cada una de las características del producto

function abrirModal(producto) {
    document.getElementById('modalImagen').src = producto.image;
    document.getElementById('modalImagen').alt = producto.title;
    document.getElementById('modalTitulo').textContent = producto.title;
    document.getElementById('modalDescripcion').textContent = producto.description;
// toFixed para que muestre 2 decimales >> rellena con cero si es necesario.
    document.getElementById('modalPrecio').textContent = `$${producto.price.toFixed(2)}`;
    document.getElementById('overlayModal').classList.add('visible');
}

function cerrarModal() {
    document.getElementById('overlayModal').classList.remove('visible');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCerrarModal').addEventListener('click', cerrarModal);
    document.getElementById('overlayModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('overlayModal')) {
            cerrarModal();
        }
    });

})






