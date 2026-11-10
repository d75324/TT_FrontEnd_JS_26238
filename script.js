const tituloPagina = document.getElementById("titulo");
const contenedor = document.getElementById("contenedor-productos");
const subtitulo = document.querySelector(".subtitulo");

// selecciono todos los elementos h1 y p que existen en el documento:
const textos = document.querySelectorAll("h1, p");

console.log(tituloPagina.textContent);
console.log(contenedor.id);
console.log(subtitulo.textContent);
console.log(textos.length);

// tituloPagina2.textContent = "Bienvenido a mi Catálogo";
// 'p' es el tipo de elemento que voy a crear, podría ser 'h5' u otros.
// const parrafo = document.createElement('p');
// parrafo.innerHTML = "<strong>barbaridad...</strong>";
// contenedor.appendChild(parrafo);

const catalogo = [
  { titulo: "Teclado mecánico", precio: 45000, categoria: "periféricos", descripcion: "Switches rojos" },
  { titulo: "Mouse inalámbrico", precio: 18000, categoria: "periféricos", descripcion: "Sensor de 1600 DPI" },
  { titulo: "Monitor 24 pulgadas", precio: 220000, categoria: "pantallas", descripcion: "Panel IPS Full HD" },
  { titulo: "Webcam HD", precio: 32000, categoria: "periféricos", descripcion: "Resolución 1080p" },
  { titulo: "Notebook 15 pulgadas", precio: 850000, categoria: "computadoras", descripcion: "16 GB de RAM y SSD de 512 GB" },
  { titulo: "Pad mouse", precio: 6000, categoria: "accesorios", descripcion: "Superficie de tela" },
];

// ----------- FUNCION PARA CREAR CARD ---------------- //

function crearCard(producto){
      const card = document.createElement("div");
  card.className = "card";

  const nombre = document.createElement("h3");
  nombre.textContent = producto.titulo;

  const categoria = document.createElement("p");
  categoria.className = "categoria";
  categoria.textContent = producto.categoria;

  const precio = document.createElement("p");
  precio.textContent = "$" + producto.precio;

  const descripcion = document.createElement("p");
  descripcion.textContent = producto.descripcion;

  const boton = document.createElement("button");
  boton.textContent = "Agregar";

  boton.addEventListener("click", () => {
  console.log("Agregado: " + producto.titulo);
  });

  card.appendChild(nombre);
  card.appendChild(categoria);
  card.appendChild(precio);
  card.appendChild(descripcion);
  card.appendChild(boton);

  return card;
}

// ----------- MOSTRAR TODAS LAS CARD ---------------- //
catalogo.forEach(producto => {
  const card = crearCard(producto);
  contenedor.appendChild(card);
});

// ----------- PRIMERA RESALTADA ---------------- //
// Uso querySelector que devuelve la primera opción con esa clase.
const primera = document.querySelector(".card");

// primera.style.backgroundColor = "lightblue";
// primera.style.border = "2px solid blue";
// primera.classList.add("destacada");

let contador = 0;
while (contador < 10) {
    	setTimeout(() => {
		primera.classList.toggle("destacada");
	}, contador * 1000);
	contador++;
}

// ----------- MODO OSCURO DESACTIVADO ---------------- //
let modoOscuro = true;
// if (modoOscuro) {
//   document.body.classList.add("oscuro");
// } else {
//   document.body.classList.remove("oscuro");
// }

const botonCambiarModo = document.getElementById("cambiar-modo");
botonCambiarModo.addEventListener("click", () => {
	// modoOscuro = !modoOscuro;
	// if (modoOscuro) {
	// 	document.body.classList.add("oscuro");
	// } else {
	// 	document.body.classList.remove("oscuro");
	// }
    document.body.classList.toggle("oscuro");
});

// ----------- F O R M U L A R I O ---------------- //
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (aca_puedo_poner_cualquier_cosa) => {
	event.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const email = document.getElementById("email").value;
	console.log("Nombre: ", nombre);
	console.log("Email: ", email);
})

// ----------- BUSCAR PRODUCTO ---------------- //
const buscador = document.getElementById("buscador");

function dibujar(lista) {
    contenedor.innerHTML = "";
    lista.forEach(producto => {
        contenedor.appendChild(crearCard(producto));
    });
}

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = catalogo.filter(producto => {
        return producto.titulo.toLowerCase().includes(texto);
    });

    dibujar(filtrados);
});

dibujar(catalogo);
// ----------- fin BUSCAR PRODUCTO ---------------- //
