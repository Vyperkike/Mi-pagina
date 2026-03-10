    gsap.registerPlugin(ScrollTrigger);
    
    const espacialTitles = document.getElementById('espacialTitles');
    
    
    
    const animaEspacialTitles = gsap.fromTo(espacialTitles,
  { opacity: 0, bottom: -100 },
  { opacity: 1, bottom: 0, 
    duration: 0.7, 
    paused: true, /* no se reproduce solita infinitamente */
  }
);
    
    ScrollTrigger.create({
  id: "espacialTitles",
  trigger: espacialTitles,
  start: "top 60%",
  onEnter: () => {
    animaEspacialTitles.restart();
  },
  onLeaveBack: () => animaEspacialTitles.reverse(),
  /*markers: true*/
});
    
    
    const espacialTexto1 = document.getElementById('espacialTexto1');
    const espacialTexto2 = document.getElementById('espacialTexto2');
    
    
      let animaEspacialText = gsap.timeline({ paused: true });

animaEspacialText.fromTo(espacialTexto1, 
    { left: -100, opacity: 0 }, 
    { left: 0, opacity: 1, ease: "power2.out", duration: 0.5 }
)
.fromTo(espacialTexto2, 
    { left: 100, opacity: 0 }, 
    { left: 0, opacity: 1, duration: 0.5 }, "-=0.4"
);

ScrollTrigger.create({
    id: "espacialText",
    trigger: espacialTexto1,
    start: "top 60%",
    onEnter: () => {
        animaEspacialText.restart();
    },
    onLeaveBack: () => animaEspacialText.reverse(),
    /*markers: true*/
});