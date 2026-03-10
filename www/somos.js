 gsap.registerPlugin(ScrollTrigger);
    


 function animaIndividualSomos(elemento, fromVars, duration=2, start = "top 75%") {
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


    const somosSubtitles = document.getElementById('somosSubtitles');

    animaIndividualSomos(somosSubtitles, 
    { right: -800, opacity: 0}, 0.4, "top 75%");

    const titleBB = document.getElementById('titleBB');
    
    animaIndividualSomos(titleBB, 
    { scale:2, left: -800, opacity: 0}, 0.4, "top 45%");


    const somosText1 = document.getElementById('somosText1');

    animaIndividualSomos(somosText1, 
    { right: -200, opacity: 0}, 0.2, "top 85%");


    const somosText2 = document.getElementById('somosText2');

   animaIndividualSomos(somosText2, 
    { left: -200, opacity: 0}, 0.2, "top 85%");



    const circulo = document.getElementById('circulo');
    const trailer = document.getElementById('trailer');

    
      
    

    const animaCircle = gsap.fromTo(circulo,
      { opacity: 0, bottom:150},
      { opacity: 1, bottom:0, 
        duration: 0.5, 
        paused: true, /*no se reproduce solita infinitamente*/
        onComplete: () => {
          trailer.classList.add('moverTrailer');
        }
      }
     );

    ScrollTrigger.create({
        trigger: circulo,
        start: "top 30%",
        onEnter: () => {
            trailer.classList.remove('moverTrailer');
            animaCircle.restart();
        },
        onLeaveBack: () => animaCircle.reverse(),
        markers: false
});
      
      
    
    



    
    
