gsap.registerPlugin(ScrollTrigger);

function animaIndividualInsta(elemento, fromVars, duration=2, start = "top 75%") {
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


const instaPrimer = document.getElementById('instaPrimer');

animaIndividualInsta(instaPrimer, 
    { scale: 1.2, right: -800, opacity: 0}, 0.4, "top 75%");


const instaSecond = document.getElementById('instaSecond');

animaIndividualInsta(instaSecond, 
    { scale: 1.2, right: -800, opacity: 0}, 0.4, "top 90%");

    const instaLugar = document.getElementById('instaLugar');

animaIndividualInsta(instaLugar, 
    { top: -100, opacity: 0}, 0.4, "top 38%");

    const instaImagen = document.getElementById('instaImagen');

animaIndividualInsta(instaImagen, 
    { top: -100, opacity: 0}, 0.4, "top 68%");