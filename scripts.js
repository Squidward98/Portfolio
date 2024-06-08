// Función para redirigir a un enlace aleatorio
function redireccionar() {
    const enlaces = [
        "https://squidward98.github.io/elterreno.info/",
        "https://squidward98.github.io/calculadora/",
        "https://squidward98.github.io/TicTacToe/",
        "https://squidward98.github.io/memotest/",
        "https://squidward98.github.io/clima/",
        "https://www.instagram.com/p/C5dbkSUta6b/",
        "https://www.youtube.com/watch?v=KxGRhd_iWuE",
        "https://www.youtube.com/watch?v=AlLhMySQTlo",
        "https://github.com/Squidward98"
        // Agrega más enlaces aquí según sea necesario
    ];

    // Escoge un enlace aleatorio del array
    const enlaceAleatorio = enlaces[Math.floor(Math.random() * enlaces.length)];

    // Abre el enlace aleatorio en una nueva pestaña
    window.open(enlaceAleatorio, '_blank');
}

// Añade el evento al botón con id "obtenerEnlace" para ejecutar la función redireccionar al hacer clic
document.getElementById("obtenerEnlace").addEventListener("click", redireccionar);