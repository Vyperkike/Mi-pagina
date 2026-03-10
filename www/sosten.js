gsap.registerPlugin(ScrollTrigger);



function animaIndividualSosten(elemento, fromVars, duration=2, start = "top 75%") {
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

const sostenTitles = document.getElementById('sostenTitles');

animaIndividualSosten(sostenTitles, 
    { scale: 1.2, right: -800, opacity: 0}, 0.4, "top 80%");

const sostenTexto = document.getElementById('sostenTexto');

animaIndividualSosten(sostenTexto, 
    { scale: 1.2, left: -400, opacity: 0}, 0.4, "top 65%");

const sostenCaja = document.getElementById('sostenCaja');

animaIndividualSosten(sostenCaja, 
    { scaleX: 2, top: -30, opacity: 0}, 0.4, "top 90%");


  const sostenFondo = document.getElementById('sostenFondo');

animaIndividualSosten(sostenFondo, 
    {left: -800, opacity: 0}, 0.4, "top 50%");