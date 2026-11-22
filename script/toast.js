// El toast es un pequeño mensaje emergente de notificación que aparece durante unos segundos y luego desaparece automáticamente.
// muestra un mensaje temporal abajo a la derecha.
// Usa el HTML que ya está en tienda.html (id="toast" class="toast-custom")
// y la clase .visible definida en styles.css.

// guardamos el id del temporizador para poder cancelarlo
// si se muestra un toast nuevo antes de que se cierre el anterior

let temporizadorToast = null;

function mostrarToast(mensaje, duracion = 3000) {
    const toast = document.getElementById('toast');
    const toastMensaje = document.getElementById('toastMensaje');

    // si la página no tiene toast, no pasa nada
    if (!toast || !toastMensaje) return;

    toastMensaje.textContent = mensaje;
    toast.classList.add('visible');

    // reiniciamos el tiempo si ya había un toast abierto
    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(cerrarToast, duracion);
}

function cerrarToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('visible');
    }
    clearTimeout(temporizadorToast);
}

// el botón ✕ cierra el toast manualmente
document.addEventListener('DOMContentLoaded', () => {
    const btnCerrar = document.querySelector('#toast button');
    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarToast);
    }
});


