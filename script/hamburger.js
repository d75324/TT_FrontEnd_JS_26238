const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cerrar = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
  nav.classList.add('active');
  })
}

// preventDefault() para evitar el comportamiento predeterminado que el navegador ejecutaría para ese evento.

if (cerrar) {
  cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active');
  })
}