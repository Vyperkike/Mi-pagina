

gsap.registerPlugin(ScrollTrigger);




function animaIndividualTerrestre(elemento, fromVars, duration=2, start = "top 75%") {
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


const terrestreTitle = document.getElementById('terrestreTitle');

animaIndividualTerrestre(terrestreTitle, 
    { scale: 2, left: -800, opacity: 0}, 0.5, "top 55%");
    

const terrestreTexto = document.getElementById('terrestreTexto');

animaIndividualTerrestre(terrestreTexto, 
    { right: -800, opacity: 0}, 0.7, "top 65%");


const terrestreContenido = document.getElementById('terrestreContenido');

animaIndividualTerrestre(terrestreContenido, 
    { scaleX:2, opacity: 0}, 0.6, "top 65%");


const transTrailer = document.getElementById('transTrailer');

animaIndividualTerrestre(transTrailer, 
    { left:-80,opacity: 0}, 0.6, "top 25%");