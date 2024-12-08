$(document).ready(function() {
    // Igualar la altura de todas las tarjetas con la clase `.card`
    $('.card').matchHeight();
});
//funsion para agrandar la tarjeta cada vez que paso el mouse por encima
function enlargeCard(card) {
    if (window.innerWidth > 575) { // Verifica que el ancho de la pantalla sea mayor que 575px para su funcionamiento, en pantallas mas pequeñas no funcionará
      card.style.transform = 'scale(1.05)'; // Agranda la tarjeta al 105 de su tamaño original
    }
}
//funsion para achicar a su tamanio original cuando retiro el puntero encima de el
function resetCardSize(card) {
    card.style.transform = 'scale(1)'; // Restablece el tamaño de la tarjeta a su valor original
}

document.addEventListener("DOMContentLoaded", () => {
    const AlternarTema = document.getElementById("AlternarTema");
    const body = document.body;

    // Carga el tema actual desde el localStorage
    const currentTheme = localStorage.getItem("theme") || "dark";
    body.classList.toggle("light-mode", currentTheme === "light");

    // Actualiza el botón de acuerdo con el tema
    AlternarTema.textContent = currentTheme === "light" ? "Modo Oscuro" : "Modo Claro";

    AlternarTema.addEventListener("click", () => {
        const isLightMode = body.classList.toggle("light-mode");
        localStorage.setItem("theme", isLightMode ? "light" : "dark");

      // Actualiza el texto del botón
        AlternarTema.textContent = isLightMode ? "Modo Oscuro" : "Modo Claro";
    });
});

// Función para validar y enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
        let mensaje = document.getElementById('mensaje').value;

        // Validar que todos los campos estén completados
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si los campos no están completados
        }

        // Validar el formato del correo electrónico
        let correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegExp.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si el correo electrónico no tiene el formato correcto
        }
        // Si los campos están completados y el formato del correo es correcto, el formulario se enviará automáticamente a través de FormSubmit
        // Restablecer el formulario después de enviarlo
        setTimeout(function() {
            event.target.reset();
        }, 4000); // Retraso de 4000 milisegundos (4 segundo)

        // Mostrar mensaje de éxito utilizando toastify.js
        Toastify({
            text: "¡El mensaje fue enviado con éxito!",
            duration: 5000, // Duración del mensaje en milisegundos (5 segundos en este caso)
            close: true, // Mostrar botón de cierre (X)
            gravity: "center", // Posición del mensaje en la pantalla
            backgroundColor: "#FF5733", // Color de fondo del mensaje (naranjo)
        }).showToast();
    });
});

/* Citas rotativas dentro de las card de Jacob */
const messagesJacob = [
    "🌟 ¡Explora proyectos innovadores en GitHub!",
    "🚀 ¿Sabías que Jacob completó un bootcamp de Full Stack Java?",
    "📚 Siempre aprendiendo, siempre creciendo."
];
let index = 0;
setInterval(() => {
    document.getElementById("dynamicText").innerText = messagesJacob[index];
    index = (index + 1) % messagesJacob.length;
}, 3000);


/* Citas rotativas dentro de las card de Manuel */
const messagesManuel = [
    "🌟 ¡lorem lorem lorem lorem lorem!",
    "🚀 ¿lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem?",
    "📚 lorem lorem, lorem lorem."
];
let index2 = 0;
setInterval(() => {
    document.getElementById("dynamicText2").innerText = messagesManuel[index];
    index = (index + 1) % messagesManuel.length;
}, 3000);





function mostrarDetallesJacob() {
    let detalles = document.getElementById("detallesJacob");
    let boton = document.querySelector("#cardJ .botonVerMas");
    let boton2 = document.querySelector("#detallesJacob .botonVerMas2");

    if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.style.display = "block";
        boton.textContent = "Ver Menos";
        boton2.textContent = "Ver Menos";
    } else {
        detalles.style.display = "none";
        boton.textContent = "Ver Más";
        boton2.textContent = "Ver Más";
    }
    
    // Ajusta la altura del contenedor
    let card = document.querySelector("#cardJ .card-body");
    card.style.height = detalles.style.display === "block" ? "auto" : "initial";
}


function mostrarDetallesManuel() {
    let detalles = document.getElementById("detallesManuel");
    let boton = document.querySelector("#cardM .botonVerMas");
    let boton2 = document.querySelector("#detallesManuel .botonVerMas2");

    if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.style.display = "block";
        boton.textContent = "Ver Menos";
        boton2.textContent = "Ver Menos";
    } else {
        detalles.style.display = "none";
        boton.textContent = "Ver Más";
        boton2.textContent = "Ver Más";
    }

    // Ajusta la altura del contenedor
    let card = document.querySelector("#cardM .card-body");
    card.style.height = detalles.style.display === "block" ? "auto" : "initial";
}



particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#6c757d"},"shape":{"type":"circle","stroke":{"width":0,"color":"#6c757d"},
    "polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,
        "sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,
            "size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,
                "color":"#6c757d","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,
                    "direction":"none","random":false,"straight":false,"out_mode":"out",
                    "bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
                    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
                    "onclick":{"enable":true,"mode":"push"},"resize":true},
                    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
                    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
                    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
                    "remove":{"particles_nb":2}}},"retina_detect":true});
                    var count_particles, stats, update; 
                    stats = new Stats; 
                    stats.setMode(0); 
                    stats.domElement.style.position = 'relative'; 
                    stats.domElement.style.left = '0px'; 
                    stats.domElement.style.top = '0px'; 
                    document.body.appendChild(stats.domElement); 
                    count_particles = document.querySelector('.js-count-particles'); 
                    update = function() { stats.begin(); 
                        stats.end(); 
                        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
                            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
                        } requestAnimationFrame(update); 
                    }; requestAnimationFrame(update);
                    ;




