gsap.registerPlugin(ScrollTrigger);

// Títulos
const sistTitle1 = document.getElementById('sistTitle1');
const sistTitle2 = document.getElementById('sistTitle2');
const sistTitleEstrategia = document.getElementById('sistTitleEstrategia');

// Texto Calidad
const sistTextCalidad = document.getElementById('sistTextCalidad');

// Fotos
const sistFotoGrande = document.getElementById('sistFotoGrande');
const sistFotoChica = document.getElementById('sistFotoChica');

// Puntos individuales
const sistPunto1 = document.getElementById('sistPunto1');
const sistPunto2 = document.getElementById('sistPunto2');
const sistPunto3 = document.getElementById('sistPunto3');
const sistPunto4 = document.getElementById('sistPunto4');
const sistPunto5 = document.getElementById('sistPunto5');
const sistPunto6 = document.getElementById('sistPunto6');
const sistPunto7 = document.getElementById('sistPunto7');
const sistPunto8 = document.getElementById('sistPunto8');

// Animaciones
const animaSistTitle1 = gsap.fromTo(sistTitle1, {left:-200, opacity:0}, {left:0, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistTitle1,start:"top 60%",onEnter:()=>animaSistTitle1.restart(),onLeaveBack:()=>animaSistTitle1.reverse(),/*markers:*/});

const animaSistTitle2 = gsap.fromTo(sistTitle2, {left:-200, opacity:0}, {left:0, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistTitle2,start:"top 60%",onEnter:()=>animaSistTitle2.restart(),onLeaveBack:()=>animaSistTitle2.reverse(),/*markers:*/});
  
 
const animaSistTitleEstrategia = gsap.fromTo(sistTitleEstrategia, {left:-200, opacity:0}, {left:0, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistTitleEstrategia,start:"top 70%",onEnter:()=>animaSistTitleEstrategia.restart(),onLeaveBack:()=>animaSistTitleEstrategia.reverse(),/*markers:*/});

const animaSistTextCalidad = gsap.fromTo(sistTextCalidad, {left:-100, opacity:0}, {left:0, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistTextCalidad,start:"top 75%",onEnter:()=>animaSistTextCalidad.restart(),onLeaveBack:()=>animaSistTextCalidad.reverse(),/*markers:*/});

const animaSistFotoGrande = gsap.fromTo(sistFotoGrande, {opacity:0, scale:1.3}, {opacity:1, scale:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistFotoGrande,start:"top 70%",onEnter:()=>animaSistFotoGrande.restart(),onLeaveBack:()=>animaSistFotoGrande.reverse(),/*markers:*/});

const animaSistFotoChica = gsap.fromTo(sistFotoChica, {opacity:0, scale:1.3}, {opacity:1, scale:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistFotoChica,start:"top 70%",onEnter:()=>animaSistFotoChica.restart(),onLeaveBack:()=>animaSistFotoChica.reverse(),/*markers:*/});

// Animaciones puntos
const animaSistPunto1 = gsap.fromTo(sistPunto1, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto1,start:"top 75%",onEnter:()=>animaSistPunto1.restart(),onLeaveBack:()=>animaSistPunto1.reverse(),/*markers:*/});

const animaSistPunto2 = gsap.fromTo(sistPunto2, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto2,start:"top 75%",onEnter:()=>animaSistPunto2.restart(),onLeaveBack:()=>animaSistPunto2.reverse(),/*markers:*/});

const animaSistPunto3 = gsap.fromTo(sistPunto3, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto3,start:"top 75%",onEnter:()=>animaSistPunto3.restart(),onLeaveBack:()=>animaSistPunto3.reverse(),/*markers:*/});

const animaSistPunto4 = gsap.fromTo(sistPunto4, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto4,start:"top 75%",onEnter:()=>animaSistPunto4.restart(),onLeaveBack:()=>animaSistPunto4.reverse(),/*markers:true*/});

const animaSistPunto5 = gsap.fromTo(sistPunto5, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto5,start:"top 75%",onEnter:()=>animaSistPunto5.restart(),onLeaveBack:()=>animaSistPunto5.reverse(),/*markers:*/});

const animaSistPunto6 = gsap.fromTo(sistPunto6, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto6,start:"top 75%",onEnter:()=>animaSistPunto6.restart(),onLeaveBack:()=>animaSistPunto6.reverse(),/*markers:*/});

const animaSistPunto7 = gsap.fromTo(sistPunto7, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto7,start:"top 75%",onEnter:()=>animaSistPunto7.restart(),onLeaveBack:()=>animaSistPunto7.reverse(),/*markers:*/});

const animaSistPunto8 = gsap.fromTo(sistPunto8, {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.4, paused:true});
ScrollTrigger.create({trigger:sistPunto8,start:"top 75%",onEnter:()=>animaSistPunto8.restart(),onLeaveBack:()=>animaSistPunto8.reverse(),/*markers:*/});
