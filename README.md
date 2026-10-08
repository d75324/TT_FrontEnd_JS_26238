# TT Ecommerce – Pre-entrega Front-End JS

Maqueta de la página principal de una tienda online, hecha con HTML y CSS para el curso de Front-End JS de Talento Tech.

## Qué incluye

### Navbar responsive
- Header fijo arriba (`position: sticky`) con el logo y los links de navegación, alineados con Flexbox.
- **En escritorio** los links se muestran en fila y cambian de color al pasar el mouse.
- **En pantallas de menos de 800px** (media query) el menú pasa a ser un panel lateral vertical que queda oculto fuera de la pantalla (`right: -300px`). Aparecen el ícono del carrito y el ícono de menú (Font Awesome).
- El panel se despliega con la clase `.active`. Está preparada para activarla con JavaScript en la próxima etapa.

### Sección principal (hero)
- Una imagen de fondo a todo el ancho (`background-size: cover`) con el texto de la promoción y el botón "Comprar" alineados a la derecha.
- Se adapta con media queries a 1200px, 992px, 768px y 576px. En cada uno cambian la altura, el padding y el tamaño de letra. En celular el texto se centra y se reacomoda la posición de la imagen.

> El resto del contenido de `index.html` (formularios, textos y banner) son pruebas de clase y no forman parte de la entrega.

## Estructura

```
├── index.html          # página principal
├── style.css           # estilos y media queries
├── img/                # logo e imágenes del hero
└── pages/
    ├── contacto.html
    └── carrito.html
```

## Cómo verlo

Abrí `index.html` en el navegador. Para probar el responsive, achicá la ventana o usá el modo dispositivo de las DevTools (F12).

## Tecnologías

HTML5 · CSS3 (Flexbox, media queries) · Google Fonts (Roboto) · Font Awesome