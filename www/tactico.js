gsap.registerPlugin(ScrollTrigger);

function animaIndividualTactico(elemento, fromVars, duration=2, start = "top 75%") {
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


const tacticoColumna = document.querySelectorAll(".tacticoColumna");

tacticoColumna.forEach(function(elemento) {
    animaIndividualTactico(elemento, { scaleX:2, right:-20, opacity: 0 }, 0.4, "top 75%");
});


const tacticoTitles = document.getElementById('tacticoTitles');

animaIndividualTactico(tacticoTitles, 
    { left: -800, opacity: 0}, 0.4, "top 75%");

    const tacticoImagen = document.getElementById('tacticoImagen');

animaIndividualTactico(tacticoImagen, 
    { right: -800, opacity: 0}, 0.4, "top 70%");