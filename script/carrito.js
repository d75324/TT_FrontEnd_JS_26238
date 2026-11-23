// si hay información en LocalStorage, va a cargar los productos
document.addEventListener('DOMContentLoad', () => cargarProductosAlCarrito());

// cargar y renderizar los productos al carrito
function cargarProductosAlCarrito() {
// carritoDeCompras viene como string así que le mandamos parse
  const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
  const tabla = document.querySelector('#tabla_carrito');

  let subtotal = 0;

  if (carrito.length === 0){
    tabla.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: center; padding: 20px;">
                Tu carrito está vacío. Agregá productos desde la 
                <a href="tienda.html">tienda</a> o desde el 
                <a href="../index.html">home</a>.
            </td>
        </tr>`;
  } else {
    carrito.forEach(producto => {
      tabla.innerHTML += creaFilaProducto(producto);
      subtotal += producto.price * producto.cantidad;
    });
  }
actualizarTotal(subtotal);
}


// 2 Genera el HTML de una fila de la tabla
function creaFilaProducto(producto){
    const subtotalProducto = producto.price * producto.cantidad;
    const titulo = producto.title.substring(0, 20) + '...';
    return `
        <tr>
            <td>
                <button class="remove-btn" data-id="${producto.id}">
                    <i class="far fa-times-circle"></i>
                </button>
            </td>
            <td>
                <img src="${producto.image}" alt="${producto.title}" style="height:80px; width:auto; object-fit:contain;">
            </td>
            <td>${titulo}</td>
            <td>$${producto.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${producto.cantidad}" min="1" class="cantidad-producto" data-id="${producto.id}">
            </td>
            <td>$${subtotalProducto}</td>
        </tr>
    `;
}

// 3 Actualizar el subtotal del producto

function actualizarTotal(subtotal){
    
}