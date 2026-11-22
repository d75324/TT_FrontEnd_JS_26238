// voy a usar un footer único para que sea el mismo en todas las páginas

const footerHTML = `
    <div class="col">
        <h4>Contacto</h4>
        <p><strong>Dirección:</strong> Av. De Las Termípolas, Ciudad Autónoma de Buenos Aires</p>
        <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
        <p><strong>Horario:</strong> 9:00 - 18:00, Lunes a Viernes</p>
        <div class="follow">
            <h4>Seguinos</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i><i class="fab fa-pinterest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>Mi Cuenta</h4>
        <a href="#">Iniciar Sesión</a>
        <a href="#">Mis Favoritos</a>
        <a href="#">Seguimiento de Pedido</a>
        <a href="#">Ayuda</a>
    </div>
    <div class="copyright">
        <p>© 2026 Talento Tech</p>
    </div>
`;

document.getElementById('footer').innerHTML = footerHTML;
