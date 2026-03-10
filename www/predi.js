gsap.registerPlugin(ScrollTrigger);



function animaIndividualPredi(elemento, fromVars, duration=2, start = "top 75%") {
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

const prediTitles = document.getElementById('prediTitles');

animaIndividualPredi(prediTitles, 
    { scale: 2, right: -800, opacity: 0}, 0.4, "top 75%");

const prediTextual = document.getElementById('prediTextual');

animaIndividualPredi(prediTextual, 
    { scale: 2, left: -800, opacity: 0}, 0.4, "top 75%");

const prediImagen = document.getElementById('prediImagen');

animaIndividualPredi(prediImagen, 
    { scale: 1, left: -400, opacity: 0}, 0.4, "top 30%");
