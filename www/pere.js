 gsap.registerPlugin(ScrollTrigger);


/*const animaPereAvion = gsap.fromTo(pereAvion,
  { scale:2,left:-800, opacity: 0, bottom: 0 },
  { left:0, opacity: 1, bottom: 0, 
    scale:1, duration: 0.7, 
    paused: false, 
  }
);

ScrollTrigger.create({
  id: "pereAvion",
  trigger: pereAvion,
  start: "top 50%",
  onEnter: () => {
    animaTransTitle.restart();
  },
  onLeaveBack: () => animaTransTitle.reverse(),
  markers: false
});
*/

/*
function animaUpDownBigPere(elemento1) {
    // Timeline

    const animaPere1 = gsap.fromTo(elemento1,
        { scale:2,left:-800, opacity: 0, bottom: 0 },
        { left:0, opacity: 1, bottom: 0, 
          scale:1, duration: 0.7, 
          paused: false, 
        }
    );

    // ScrollTrigger
    ScrollTrigger.create({
        trigger: elemento1,
        start: "top 65%",
        onEnter: () => animaPere1.restart(),
        onLeaveBack: () => animaPere1.reverse(),
        markers: false
    });

    return animaPere1; // opcional, por si luego quieres manipular el timeline
}

*/

function animaIndividualPere(elemento, fromVars, duration=2, start = "top 75%") {
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




 const pereAvion = document.getElementById('pereAvion');

 animaIndividualPere(pereAvion, 
    { scale: 2, left: -800, opacity: 0}, 0.4 );



 const pereCircle = document.getElementById('pereCircle');

  animaIndividualPere(pereCircle, 
    { scale: 1.5, opacity: 0}, 0.4 );


 const pereTexto = document.getElementById('pereTexto');

  animaIndividualPere(pereTexto, 
        {left: -800, opacity: 0}, 0.4, "top 85%");


 const pereSubtitles = document.getElementById('pereSubtitles');
   animaIndividualPere(pereSubtitles, 
       { scale: 2, right: -300, opacity: 0}, 0.4, "top 85%");
