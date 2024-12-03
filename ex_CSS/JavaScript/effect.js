

// Efecto fade-in en elementos al hacer scroll
const elementosFadeIn = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function() {
    elementosFadeIn.forEach(element => {
        const posicion = element.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;
        if (posicion < alturaPantalla - 100) {
            element.classList.add('visible');
        }
    });
});

// Efecto dinámico en el botón (cambio de color aleatorio)
const boton = document.getElementById('boton-efecto');

boton.addEventListener('mouseover', () => {
    boton.style.backgroundColor = getColorAleatorio();
});

function getColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
