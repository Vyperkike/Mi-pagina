gsap.registerPlugin(ScrollTrigger);

function animaIndividualMoni(elemento, fromVars, duration=2, start = "top 75%") {
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


const moniFondo = document.getElementById('moniFondo');

animaIndividualMoni(moniFondo, 
    { scale: 1, right: -800, opacity: 0}, 0.9, "top 15%");


const moniTitles = document.getElementById('moniTitles');

animaIndividualMoni(moniTitles, 
    { scale: 2, left: -400, opacity: 0}, 0.9, "top 65%");

    
const moniSubtitles = document.getElementById('moniSubtitles');

animaIndividualMoni(moniSubtitles, 
    { top: -300, opacity: 0}, 0.5, "top 48%");


const moniTexto = document.getElementById('moniTexto');

animaIndividualMoni(moniTexto, 
    { bottom: -100, opacity: 0}, 0.5, "top 95%");