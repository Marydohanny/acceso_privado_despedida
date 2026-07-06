const pinCorrecto = "080325";
let intentos = 0;

const mensajesRomanticos = [
    "Te doy otra oportunidad 💕",
    "Piensa en nosotros… ❤️",
    "Confío en ti 🥺",
    "¿Seguro que no recuerdas nuestra fecha? 😏"
];

function verificarPin(){
    const pin = document.getElementById("pinInput").value;
    const mensaje = document.getElementById("mensaje");
    //const boton = document.getElementaryById(btn);
    
    if(pin === pinCorrecto){
        iniciarCuentaRegresiva();
    } else {
        intentos++;
        mensaje.textContent = mensajesRomanticos[intentos-1] || "Mi corazón se está cerrando 💔";
        moverBoton();
    }
}

function moverBoton(){
    const boton = document.getElementById("btn");
    boton.style.position = "relative";
    boton.style.left = Math.random()*200 - 100 + "px";
    boton.style.top = Math.random()*20 + "px";
}

function iniciarCuentaRegresiva(){
    const contador = document.getElementById("contador");
    const pantalla = document.getElementById("pantallaPin");

    contador.style.display="block";
    let numero = 3;
    contador.textContent = numero;

    const intervalo = setInterval(()=>{
        numero--;
        if(numero > 0){
            contador.textContent = numero;
        } else {
            clearInterval(intervalo);
            pantalla.classList.add("oculto");
            document.getElementById("sorpresa").classList.remove("oculto");
            iniciarLluviaCorazones();
        }
    },1000);
}
function iniciarLluviaCorazones(){
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.innerHTML="❤️";
        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-10px";
        heart.style.fontSize="20px";
        heart.style.animation="fall 3s linear";
        document.body.appendChild(heart);
        setTimeout(()=>{ heart.remove(); },3000);
    },300);
}

/* Animación caída corazones */
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); }
}`;
document.head.appendChild(style);
// corazones flotando alrededor del input
setInterval(()=>{
    const contenedor = document.querySelector(".contenedor");
    const heart = document.createElement("div");
    heart.className="heart-float";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*200+"px";
    heart.style.top="150px";
    contenedor.appendChild(heart);
    setTimeout(()=>heart.remove(),3000);
},800);

//==========Pantalla momento===============//
function VerMomentos(){
    document.getElementById("sorpresa").classList.add("oculto");
    document.getElementById("momentos").classList.remove("oculto");

    setTimeout(function(){
        document.getElementById("momentos").classList.add("oculto");
        document.getElementById("seccionFotos").classList.remove("oculto");
    }, 1000);
}

/* ===== VISOR DE IMÁGENES ===== */

const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");

document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", function(){
        imagenGrande.src = this.src;
        visor.classList.remove("oculto");
    });
});

visor.addEventListener("click", function(){
    visor.classList.add("oculto");
});

//------------------------------ULTIMA PANTALLA---------------------------------
function VerFinal() {
    // Ocultar otras secciones
    document.getElementById("seccionFotos").classList.add("oculto");

    // Mostrar pantalla final
    const final = document.getElementById("pantallaFinal");
    final.classList.remove("oculto");

    // Iniciar contador de tiempo desde la fecha
    iniciarContadorFinal();

    // Iniciar efecto máquina de escribir
    mostrarPantallaFinal();
}

// Contador final separado
function iniciarContadorFinal() {
    const fechaInicio = new Date("2025-06-04T00:00:00");

    function actualizarContador() {
        const ahora = new Date();
        let diferencia = ahora - fechaInicio;
        if(diferencia < 0) diferencia = 0; // evitar números negativos

        const segundos = Math.floor(diferencia / 1000) % 60;
        const minutos = Math.floor(diferencia / 1000 / 60) % 60;
        const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
        const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);

        document.getElementById("contadorFinal").textContent =
            `${dias} días, ${horas} h, ${minutos} m, ${segundos} s`;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);
}

// Función que escribe el mensaje letra por letra
function mostrarPantallaFinal() {

    const pantalla = document.getElementById("pantallaFinal");
    pantalla.classList.remove("oculto");

    const mensaje = "Gracias por estar en mi vida ❤️ Cada momento contigo es especial y me haces sonreír siempre… 🌟\n\n" +
    "Amo cada momento que paso con vos, aunque creas que no. Sé que soy muy fría, pero estoy tratando de demostrarte que sí te quiero, te aprecio, te extraño, te admiro y te amooooooooooooooooooo 💖\n\n" +
    "Me gusta tu paciencia, tu interés, tu determinación y tu disposición para siempre ayudarme y priorizarme. Me siento Unica estando a tu lado, porque entiendo lo importante que soy para vos..... he dedicado tiempo haciendo esto, para demostrarte que si TE QUIERO DEMASIADO 🫶\n\n" +
    "TE AMOOOOOOOOOOOOOOO DEMASIADO 🌷💞🥰💕";
    escribirTexto("textoPensamiento", mensaje, 50);

}

// Máquina de escribir con parámetro para detener el sticker
function escribirTexto(elementId, texto, velocidad = 50, intervalSticker) {
    const contenedor = document.getElementById(elementId);
    contenedor.innerHTML = "";
    let index = 0;

    function escribir() {
        if (index < texto.length) {
            contenedor.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escribir, velocidad);
        } else {
            document.getElementById("btn4").classList.remove("oculto");
        }
    }

    escribir();
}
function irDespedida() {
    window.location.href = "despedida.html";
}


