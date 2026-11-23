// si hay información en LocalStorage, va a cargar los productos
document.addEventListener('DOMContentLoaded', cargarProductosAlCarrito);

// cargar y renderizar los productos al carrito
function cargarProductosAlCarrito() {
// carritoDeCompras viene como string así que le mandamos parse
  const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
  const tabla = document.querySelector('#tabla_carrito');
// evito duplicar las filas cuando se redibuje la tabla
  tabla.innerHTML = '';

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
    adjuntarEventosCarrito();
  }
actualizarTotal(subtotal);
}


// 2 Genera el HTML de una fila de la tabla
function creaFilaProducto(producto){
    const subtotalProducto = producto.price * producto.cantidad;
    // const subtotalProducto = (producto.price * producto.cantidad).toFixed(2);
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
            <td>$${subtotalProducto.toFixed(2)}</td>
        </tr>
    `;
}

// 3 Actualizar el subtotal del producto
function actualizarTotal(subtotal){
    document.getElementById('subtotal-carrito').textContent = `
        $${subtotal.toFixed(2)}
        `;
    document.getElementById('total-carrito').textContent = `
        $${subtotal.toFixed(2)}
        `;
}

// agrego 2 funciones para 'escuchar' las cantidades en el carrito
// escucha los cambios de cantidad en cada input
// ATENTO: 'change' en lugar de 'input': change se dispara al usar las flechitas del input. >>>> 'input' falla - VER
// Math.max(1, para que no se tomen como válidos los números negativos o cero.
function adjuntarEventosCarrito() {
  document.querySelectorAll('.cantidad-producto').forEach(input => {
    input.addEventListener('change', (e) => {
      const id = Number(e.target.dataset.id);
      const nuevaCantidad = Math.max(1, parseInt(e.target.value) || 1);
      cambiarCantidad(id, nuevaCantidad);
    });
  });
}

// actualizar la cantidad en localStorage y redibuja el carrito
// ERROR ATENCIÓN: Number(e.target.dataset.id): dataset siempre devuelve texto PERO el carrito usa números (3). Uso item.id === id para que siempre mande un número.
function cambiarCantidad(id, cantidad) {
  const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
  const producto = carrito.find(item => item.id === id);
  if (producto) {
    producto.cantidad = cantidad;
    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
  }
  cargarProductosAlCarrito();
}

