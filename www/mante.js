gsap.registerPlugin(ScrollTrigger);

function animaIndividualMante(elemento, fromVars, duration=2, start = "top 75%") {
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


const manteTitles = document.getElementById('manteTitles');

animaIndividualMante(manteTitles, 
    { scale:2, right: -20, opacity: 0}, 0.4, "top 55%");


const manteTexto1 = document.getElementById('manteTexto1');

animaIndividualMante(manteTexto1, 
    { right: -200, opacity: 0}, 0.4, "top 85%");

const especialA = document.querySelectorAll(".especialA");

especialA.forEach(function(elemento) {
    animaIndividualMante(elemento, { top: -100, left:-200, opacity: 0 }, 0.4, "top 80%");
});

const manteSubtitles = document.querySelectorAll(".manteSubtitles");

manteSubtitles.forEach(function(elemento) {
    animaIndividualMante(elemento, { top: -100, right:-20, opacity: 0 }, 0.4, "top 82%");
});


