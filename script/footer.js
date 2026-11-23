// voy a usar un footer único para que sea el mismo en todas las páginas

const footerHTML = `
    <div class="col">
        <h4>Contacto</h4>
        <p><strong>Dirección:</strong> Chirimay 125, Ciudad Autónoma de Buenos Aires</p>
        <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
        <p><strong>Horario:</strong> 9:00 - 18:00, Lunes a Viernes</p>
    </div>
`;

document.getElementById('footer').innerHTML = footerHTML;
