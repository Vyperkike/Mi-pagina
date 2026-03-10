gsap.registerPlugin(ScrollTrigger);

function animaIndividualPreven(elemento, fromVars, duration=2, start = "top 75%") {
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


const prevenImagen = document.getElementById('prevenImagen');

animaIndividualPreven(prevenImagen, 
    { top: -400, opacity: 0}, 0.4, "top 5%");


const prevenTitles = document.getElementById('prevenTitles');

animaIndividualPreven(prevenTitles, 
    { top: -400, right:-600, opacity: 0}, 0.4, "top 35%");


const prevenTexto = document.getElementById('prevenTexto');

animaIndividualPreven(prevenTexto, 
    { bottom: -300, opacity: 0}, 0.4, "top 105%");