# TT Ecommerce – Entrega Final Front-End JS

Tienda online hecha con HTML, CSS y JavaScript para el curso de Front-End JS de Talento Tech. Los productos se traen de [Fake Store API](https://fakestoreapi.com/) y el carrito se guarda en el navegador con `localStorage`.

> **Estado:** en desarrollo. La tienda y el carrito ya funcionan; hay partes pendientes que se detallan más abajo.

## Funcionalidades

### Tienda (`pages/tienda.html`)
- Al cargar la página se hace un `fetch` a `https://fakestoreapi.com/products` y se dibuja una card por producto (imagen, categoría, título acortado y precio con dos decimales).
- **Ver descripción:** abre un modal con la imagen, el título completo, la descripción y el precio del producto.
- **Agregar:** suma el producto al carrito. Si ya estaba, aumenta la cantidad en lugar de duplicarlo (`findIndex`).
- **Toast:** al agregar un producto aparece un aviso abajo a la derecha durante 3 segundos. Se puede cerrar con la ✕.

### Carrito (`pages/carrito.html`)
- Lee el carrito desde `localStorage` (clave `carritoDeCompras`) y arma la tabla con imagen, producto, precio, cantidad y subtotal.
- Si el carrito está vacío, muestra un mensaje con links a la tienda y al home.
- Las cantidades se pueden modificar desde el input; el subtotal de cada fila y el total se recalculan solos. No se aceptan cantidades menores a 1.
- El envío figura como gratis, así que el total es igual al subtotal.

### Home (`index.html`)
- Hero con imagen de fondo, texto de la promoción y botón "Comprar".
- Catálogo de productos traído de la API con un **buscador** que filtra por título mientras se escribe.
- Botón para cambiar entre modo claro y oscuro.
- Formulario conectado a [Formspree](https://formspree.io/).

### Contacto (`pages/contacto.html`)
- Formulario con nombre, email y mensaje, con campos obligatorios (`required`).

### Elementos compartidos
- **Navbar responsive:** en pantallas de menos de 800px el menú se convierte en un panel lateral que se abre con el ícono de menú y se cierra con la ✕ (`script/hamburger.js`).
- **Footer único:** se inyecta desde `script/footer.js`, así todas las páginas muestran el mismo.
- **Responsive:** media queries a 1200px, 992px, 800px, 768px, 576px y 477px.

## Estructura

```
├── index.html             # home: hero, catálogo con buscador, formulario
├── styles.css             # estilos generales, navbar, hero, toast, media queries
├── estilos/
│   ├── tienda.css
│   ├── carrito.css
│   └── contacto.css
├── script/
│   ├── script.js          # catálogo y buscador del home, modo oscuro
│   ├── tienda.js          # fetch a la API, cards, modal, agregar al carrito
│   ├── carrito.js         # tabla del carrito, cantidades y totales
│   ├── toast.js           # aviso temporal al agregar productos
│   ├── hamburger.js       # abrir y cerrar el menú en mobile
│   └── footer.js          # footer compartido
├── img/                   # logo e imágenes
└── pages/
    ├── tienda.html
    ├── carrito.html
    └── contacto.html
```

## Cómo verlo

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador (o usar la extensión Live Server de VS Code).
3. Se necesita conexión a internet para cargar los productos de la API, las fuentes y los íconos.

Para probar el responsive, achicar la ventana o usar el modo dispositivo de las DevTools (F12).

## Pendiente

- [ ] Botón para eliminar productos del carrito (el botón ya está en la tabla, falta la lógica).
- [ ] Aplicar cupón de descuento.
- [ ] Botón "Proceder al pago".
- [ ] Conectar el formulario de contacto (hoy no tiene `action`).
- [ ] Página de Blog y sección "Acerca de".
- [ ] Banner del home (marcado como "próximamente").

## Tecnologías

- HTML5 y CSS3 (Flexbox, media queries)
- JavaScript: manipulación del DOM, eventos, `fetch`, `localStorage`, métodos de arrays (`map`, `filter`, `find`, `findIndex`)
- [Fake Store API](https://fakestoreapi.com/)
- [Formspree](https://formspree.io/)
- Google Fonts (Roboto, Open Sans, League Spartan) y Font Awesome