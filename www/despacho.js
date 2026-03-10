gsap.registerPlugin(ScrollTrigger);


function animaIndividualDespacho(elemento, fromVars, duration=2, start = "top 75%") {
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


const desTitles = document.querySelectorAll(".desTitles");

desTitles.forEach(function(elemento) {
    animaIndividualDespacho(elemento, { top: -100, opacity: 0 }, 0.4, "top 75%");
});

const desTexto = document.querySelectorAll(".desTexto");

desTexto.forEach(function(elemento) {
    animaIndividualDespacho(elemento, { top: -100, right:-20, opacity: 0 }, 0.4, "top 75%");
});

const desIcon = document.getElementById("desIcon");

animaIndividualAduanas(desIcon, 
    { scale: 2, right: -100, opacity: 0}, 0.4, "top 75%");


const desSubtitles = document.getElementById("desSubtitles");

animaIndividualAduanas(desSubtitles, 
    { scale: 1.2, right: -400, opacity: 0}, 0.4, "top 75%");