
 gsap.registerPlugin(ScrollTrigger);

 

function animaIndividualAduanas(elemento, fromVars, duration=2, start = "top 75%") {
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




const aduFoto = document.getElementById("aduFoto");


animaIndividualAduanas(aduFoto, 
    { scale:1.2, right: -300, opacity: 0}, 0.4, "top 55%");



const aduTitles = document.getElementById("aduTitles");

animaIndividualAduanas(aduTitles, 
    { scale: 2, top: -80, opacity: 0}, 0.5, "top 75%" );



const aduTexto = document.getElementById("aduTexto");

animaIndividualAduanas(aduTexto, 
    { bottom: -200, opacity: 0}, 0.3, "top 100%" );

