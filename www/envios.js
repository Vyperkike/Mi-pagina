    gsap.registerPlugin(ScrollTrigger);


    function animaIndividualEnvios(elemento, fromVars, duration=2, start = "top 75%") {
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



const enviosHeaderFondo = document.getElementById("enviosHeaderFondo");

animaIndividualEnvios(enviosHeaderFondo, 
    { opacity: 0, top: 70, left:-100 }, 0.5, "top 50%");



const enviosTitles = document.querySelectorAll(".enviosTitles");

enviosTitles.forEach(function(elemento) {
    animaIndividualEnvios(elemento, { scale:1.5, top: -180, right:-20, opacity: 0 }, 0.4, "top 75%");
});


const enviosTexto = document.querySelectorAll(".enviosTexto");

enviosTexto.forEach(function(elemento) {
    animaIndividualEnvios(elemento, { left:-100, opacity: 0 }, 0.4, "top 75%");
});