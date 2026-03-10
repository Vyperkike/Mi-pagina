gsap.registerPlugin(ScrollTrigger);
    
    const coberMapaBase = document.getElementById('coberMapaBase');
    const coberMapaPlaces = document.getElementById('coberMapaPlaces');
    
    
    const coberTitles = document.getElementById('coberTitles');
    const coberTexto = document.getElementById('coberTexto');
    
    
let animaCoberMapa = gsap.timeline({ paused: true });
    
    animaCoberMapa.fromTo(coberMapaBase, { bottom: -100, opacity:0 }, { bottom: 0, opacity:1, ease: "power2.out", duration: 0.5})
     .fromTo(coberMapaPlaces, { top: -150, opacity:0 }, { top: 0, opacity:1, duration: 0.5 },"-=0.3");
    
    ScrollTrigger.create({
    id: "mapa",
    trigger: coberMapaBase,
    start: "top 50%",
    onEnter: () => {
        animaCoberMapa.restart();
    },
    onLeaveBack: () => animaCoberMapa.reverse(),
    markers: false
});
    
    let animaCoberTextos = gsap.timeline({ paused: true });
    
    animaCoberTextos.fromTo(coberTitles, { left:200, opacity:0 }, { left:0, bottom: 0, opacity:1, ease: "power2.out", duration: 0.5})
     .fromTo(coberTexto, {  top: -150, opacity:0 }, { top: 0, opacity:1, duration: 0.5 },"-=0.3");
    
    ScrollTrigger.create({
    id: "coberTextos",
    trigger: coberTitles,
    start: "top 70%",
    onEnter: () => {
        animaCoberTextos.restart();
    },
    onLeaveBack: () => animaCoberTextos.reverse(),
    markers: false
});