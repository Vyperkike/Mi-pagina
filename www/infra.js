gsap.registerPlugin(ScrollTrigger);



function animaIndividualInfra(elemento, fromVars, duration=2, start = "top 75%") {
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


const infraTitles = document.getElementById('infraTitles');

animaIndividualInfra(infraTitles, 
    { scale: 2, right: -800, opacity: 0}, 0.4, "top 75%");


const infraEspecial = document.querySelectorAll(".infraEspecial");

infraEspecial.forEach(function(elemento) {
    animaIndividualInfra(elemento, { right:-200, opacity: 0 }, 0.4, "top 75%");
});

const infraNumeralia = document.querySelectorAll(".infraNumeralia");

infraNumeralia.forEach(function(elemento) {
    animaIndividualInfra(elemento, { scale: 2, opacity: 0 }, 0.4, "top 70%");
});

const infraTrailers = document.querySelectorAll(".infraTrailers");

infraTrailers.forEach(function(elemento) {
    animaIndividualInfra(elemento, { bottom:-200, opacity: 0 }, 0.4, "top 105%");
});

