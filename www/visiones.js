
    gsap.registerPlugin(ScrollTrigger);
    
    const visCircle = document.getElementById('visCircle');
    
    const visValores = document.getElementById('visValores');
    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val2');
    const val3 = document.getElementById('val3');
    const val4 = document.getElementById('val4');
    const val5 = document.getElementById('val5');
    const val6 = document.getElementById('val6');
    const val7 = document.getElementById('val7');
    // nuevos valores agregados en el HTML
    const val8 = document.getElementById('val8');
    const val9 = document.getElementById('val9');
    
    const visMis = document.getElementById('visMis');
    const visMisText = document.getElementById('visMisText');
    
    const visVis = document.getElementById('visVis');
    const visVisText = document.getElementById('visVisText');
    
    const visVal = document.getElementById('visVal');

    const visTrailerDeco = document.getElementById('visTrailerDeco');
      
    const animaVisCircle = gsap.fromTo(visCircle,
      { scale: 1.5, opacity: 0, bottom:0, right:0},
      { scale:1, opacity: 1, bottom:0, 
        duration: 0.4, 
        paused: true, /*no se reproduce solita infinitamente*/
      }
     );
    
     ScrollTrigger.create({
        id: "visCircle",
        trigger: visCircle,
        start: "top 60%",
        onEnter: () => {
            animaVisCircle.restart();
        },
        onLeaveBack: () => animaVisCircle.reverse(),
        markers: false
     });
    
    
let visTl = gsap.timeline({ paused: true });

visTl.fromTo(val1, { bottom: 250, opacity:0 }, { bottom: 0, opacity:1, ease: "power2.out", duration: 0.4})
    .fromTo(val2, { bottom: 250, opacity:0 }, { bottom: 0, opacity:1, duration: 0.38 },"-=0.1")
    .fromTo(val3, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.35, opacity:1 },"-=0.1")
    .fromTo(val4, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.3, opacity:1 },"-=0.1")
    .fromTo(val5, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.28, opacity:1 },"-=0.1")
    .fromTo(val6, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.25, opacity:1 },"-=0.1")
    .fromTo(val7, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.2, opacity:1 },"-=0.1")
    .fromTo(val8, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.18, opacity:1 },"-=0.1")
    .fromTo(val9, { bottom: 250, opacity:0 }, { bottom: 0, duration: 0.16, opacity:1 },"-=0.1");

ScrollTrigger.create({
    id: "timeline",
    trigger: visValores,
    start: "top 80%",
    onEnter: () => {
        visTl.restart();
    },
    onLeaveBack: () => visTl.reverse(),
    markers: false
});

    let visMisTl = gsap.timeline({ paused: true });
    
    visMisTl.fromTo(visMis, { scale:2, left: -100, opacity:0 }, { scale:1, left: 0, opacity:1, ease: "power2.out", duration: 0.8})
     .fromTo(visMisText, { left: 0, opacity:0 }, { left: 0, opacity:1, duration: 0.6 },"-=0.2");
    
    ScrollTrigger.create({
    id: "visMis",
    trigger: visMis,
    start: "top 70%",
    onEnter: () => {
        visMisTl.restart();
    },
    onLeaveBack: () => visMisTl.reverse(),
    markers: false
});
    
    let visVisTl = gsap.timeline({ paused: true });
    
    visVisTl.fromTo(visVis, { scale:2, left: -100, opacity:0 }, {scale:1, left: 0, opacity:1, ease: "power2.out", duration: 0.8})
     .fromTo(visVisText, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.8 },"-=0.2s");
    
    ScrollTrigger.create({
    id: "visVis",
    trigger: visVis,
    start: "top 70%",
    onEnter: () => {
        visVisTl.restart();
    },
    onLeaveBack: () => visVisTl.reverse(),
    markers: false
});
    
    const animaVisVal = gsap.fromTo(visVal,
      { scale:2, opacity: 0, left:-50},
      { scale:1, opacity: 1, left:0, 
        duration: 0.8, 
        paused: true, /*no se reproduce solita infinitamente*/
      }
     );
    
   ScrollTrigger.create({
    id: "visVal",
    trigger: visVal,
    start: "top 80%",
    onEnter: () => {
        animaVisVal.restart();
    },
    onLeaveBack: () => animaVisVal.reverse(),
    markers: false
   });
    

const animaVisTrailerDeco = gsap.from(visTrailerDeco, {
  scale: 1.5,
  opacity: 0,
  right: 100,
  duration: 0.9,
  paused: true // no se reproduce sola
});
    
   ScrollTrigger.create({
    id: "visTrailerDeco",
    trigger: visTrailerDeco,
    start: "top 50%",
    onEnter: () => {
        animaVisTrailerDeco.restart();
    },
    onLeaveBack: () => animaVisTrailerDeco.reverse(),
    markers: false
   });
    