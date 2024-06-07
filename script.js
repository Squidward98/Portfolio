function redireccionar() {
    // Lista de enlaces
    var enlaces = [
        "https://squidward98.github.io/ChallengeIntegrador-CodoACodo2023/",
        "https://squidward98.github.io/elterreno.info/",
        "https://squidward98.github.io/calculadora/",
        "https://squidward98.github.io/TicTacToe/",
        "https://squidward98.github.io/memotest/",
        "https://squidward98.github.io/clima/",
        "https://www.whatsapp.com/channel/0029VaWuIIx4dTnFIZzBF72g",
        "https://kick.com/blu3b0y98",
        "https://www.twitch.tv/blu3b0y98",
        "https://linktr.ee/883v",
        "https://www.youtube.com/channel/UCe0qlz4GHp8c49HjJwbL5uw",
        "https://www.youtube.com/@FlashyFlables98",
        "https://www.tiktok.com/@blu3.b0y",
        "https://www.tiktok.com/@blu3.b0y/video/7358432121356258566",
        "https://www.instagram.com/p/BWP9gBPFGWB/",
        "https://www.instagram.com/p/C7WzTwOxyfm/",
        "https://www.instagram.com/p/C5xshqwt5yY/",
        "https://www.instagram.com/p/C5dbkSUta6b/", 
        "https://www.instagram.com/p/CZCzaNSFNfX/?img_index=1"
        // Agrega más enlaces aquí según sea necesario
    ];

    // Escoge un enlace aleatorio del array
    var enlaceAleatorio = enlaces[Math.floor(Math.random() * enlaces.length)];

    // Abre el enlace aleatorio en una nueva pestaña
    window.open(enlaceAleatorio, '_blank');
}

document.getElementById("obtenerEnlace").addEventListener("click", redireccionar);
