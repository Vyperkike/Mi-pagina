 gsap.registerPlugin(ScrollTrigger);


function animaIndividualMontana(elemento, fromVars, duration=2, start = "top 75%") {
    // Animación desde (hacia CSS final)
    const animaMontana = gsap.from(elemento, { 
        ...fromVars, 
        duration: duration,
        paused: true 
    });

    // ScrollTrigger
    ScrollTrigger.create({
        trigger: elemento,
        start: start,
        onEnter: () => animaMontana.restart(),
        onLeaveBack: () => animaMontana.reverse(),
        markers: false
    });
    return animaMontana;
}

const montanaFondo = document.getElementById('montanaFondo');

animaIndividualMontana(montanaFondo, 
    { scale:1.5, bottom:-300, opacity: 0}, 1, "top 40%");


const montanaCircle = document.getElementById('montanaCircle');

animaIndividualMontana(montanaCircle, 
    { scale:2, opacity: 0}, 1, "top 40%");