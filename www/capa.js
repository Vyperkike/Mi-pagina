gsap.registerPlugin(ScrollTrigger);



function animaIndividualCapa(elemento, fromVars, duration=2, start = "top 75%") {
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



const capaTitles = document.getElementById('capaTitles');

animaIndividualCapa(capaTitles, 
    { scale: 2, right: 800, opacity: 0}, 0.4, "top 75%" );



const capaTexto1 = document.getElementById('capaTexto1');

animaIndividualCapa(capaTexto1, 
    { left: 500, opacity: 0}, 0.4, "top 70%" );

const capaTexto2 = document.getElementById('capaTexto2');

animaIndividualCapa(capaTexto2, 
    { right: 500, opacity: 0}, 0.4, "top 70%" );