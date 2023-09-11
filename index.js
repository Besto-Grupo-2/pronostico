
const botonModoOscuro = document.getElementById('modoObscuro');
const body = document.body;

botonModoOscuro.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});