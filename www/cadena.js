
gsap.registerPlugin(ScrollTrigger);



function animaIndividualCadena(elemento, fromVars, duration=2, start = "top 75%") {
    // Animación desde (hacia CSS final)
    const animaCadena = gsap.from(elemento, { 
        ...fromVars, 
        duration: duration,
        paused: true 
    });

    // ScrollTrigger
    ScrollTrigger.create({
        trigger: elemento,
        start: start,
        onEnter: () => animaCadena.restart(),
        onLeaveBack: () => animaCadena.reverse(),
        markers: false
    });
    return animaCadena;
}


const cadenaTrailer = document.getElementById('cadenaTrailer');

animaIndividualCadena(cadenaTrailer, 
    { opacity: 0, left:-100}, 0.4, "top 75%");

    

const cadenaTitles = document.querySelectorAll(".cadenaTitles");

cadenaTitles.forEach(function(elemento) {
    animaIndividualCadena(elemento, { bottom: -50, opacity: 0 }, 0.4, "top 75%");
});



const cadenaTexto = document.querySelectorAll(".cadenaTexto");

cadenaTexto.forEach(function(elemento) {
    animaIndividualCadena(elemento, { right: -50, opacity: 0 }, 0.4, "top 75%");
});


const cadenaDiagrama = document.getElementById('cadenaDiagrama');

animaIndividualCadena(cadenaDiagrama, 
    { scale: 2, right: -800, opacity: 0}, 0.4, "top 30%");