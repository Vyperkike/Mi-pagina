 gsap.registerPlugin(ScrollTrigger);

 function animaIndividualEquipo(elemento, fromVars, duration=2, start = "top 75%") {
    // Animación desde (hacia CSS final)
    const animaPere = gsap.from(elemento, { 
        ...fromVars, 
        duration: duration,
        paused: true 
    });

    // ScrollTrigger
    ScrollTrigger.create({
        trigger: elemento,
        start: start,
        onEnter: () => animaPere.restart(),
        onLeaveBack: () => animaPere.reverse(),
        markers: false
    });
    return animaPere;
}



const equipoTrailers = document.getElementById('equipoTrailers');

animaIndividualEquipo(equipoTrailers, 
    { scale: 2, right: -800, opacity: 0}, 0.6, "top 60%");


const equipoTitles = document.getElementById('equipoTitles');

animaIndividualEquipo(equipoTitles, 
    { left: -100, opacity: 0}, 0.6, "top 75%");
    

const mucho = document.getElementById("mucho");

animaIndividualEquipo(mucho, 
    { left: -100, opacity: 0}, 0.6, "top 65%");


const equipoSubtitles = document.querySelectorAll(".equipoSubtitles");

equipoSubtitles.forEach(function(elemento) {
    animaIndividualEquipo(elemento, { bottom: -30, right:20, opacity: 0 }, 0.5, "top 77%");
});


const equipoColumna = document.querySelectorAll(".equipoColumnaPuntos");

equipoColumna.forEach(function(elemento) {
    animaIndividualEquipo(elemento, { scaleX:1.5, left:100, ease: "power2.out", opacity: 0 }, 0.5, "top 77%");
});



