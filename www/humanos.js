gsap.registerPlugin(ScrollTrigger);


function animaIndividualHumanos(elemento, fromVars, duration=2, start = "top 75%") {
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


const humanosImagen = document.getElementById('humanosImagen');

animaIndividualHumanos(humanosImagen, 
    { scale: 2, left: -100, opacity: 0}, 0.4, "top 75%");


const humanosTitles = document.getElementById('humanosTitles');

animaIndividualHumanos(humanosTitles, 
    { scale: 2, right: -100, opacity: 0}, 0.4, "top 75%");


const humanosTexto = document.getElementById('humanosTexto');

animaIndividualHumanos(humanosTexto, 
    { scale: 2, left: -100, opacity: 0}, 0.4, "top 75%");


const humanosSubtitles = document.getElementById('humanosSubtitles');

animaIndividualHumanos(humanosSubtitles, 
    { scale: 2, right: -100, opacity: 0}, 0.4, "top 75%");