gsap.registerPlugin(ScrollTrigger);

function animaIndividualFooter(elemento, fromVars, duration=2, start = "top 75%") {
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


const footer = document.getElementById('footer');

animaIndividualFooter(footer, 
    { scale:1.1, top:-100, opacity: 0}, 0.6, "top 65%");