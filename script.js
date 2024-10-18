// script.js

document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito!');
    });
});
