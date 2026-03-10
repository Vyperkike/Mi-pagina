gsap.registerPlugin(ScrollTrigger);
    
    const clientesCircle = document.getElementById('clientesCircle');
    const clientesPrimerTexto = document.getElementById('clientesPrimerTexto');
    
     const clientesValor = document.getElementById('clientesValor');
     const clientesValorTexto = document.getElementById('clientesValorTexto');
      
        const animaClientesCircle = gsap.fromTo(clientesCircle,
      { scale: 1.5, opacity: 0, bottom:0},
      { scale:1, opacity: 1, bottom:0, 
        duration: 0.7, 
        paused: true, /*no se reproduce solita infinitamente*/
      }
     );
    
     ScrollTrigger.create({
        id: "clientesCircle",
        trigger: clientesCircle,
        start: "top 60%",
        onEnter: () => {
            animaClientesCircle.restart();
        },
        onLeaveBack: () => animaClientesCircle.reverse(),
        markers: false
     });
    
    
     const animaClientesPrimer = gsap.fromTo(clientesPrimerTexto,
      { opacity: 0, bottom:100},
      { opacity: 1, bottom:0, 
        duration: 0.7, 
        paused: true, /*no se reproduce solita infinitamente*/
      }
     );
    
     ScrollTrigger.create({
        id: "clientesPrimer",
        trigger: clientesPrimerTexto,
        start: "top 60%",
        onEnter: () => {
            animaClientesPrimer.restart();
        },
        onLeaveBack: () => animaClientesPrimer.reverse(),
        markers: false
     });
    
    
    let animaClientesValor = gsap.timeline({ paused: true });
    
    animaClientesValor.fromTo(clientesValor, { left: -100, opacity:0 }, { left: 0, opacity:1, ease: "power2.out", duration: 0.5})
     .fromTo(clientesValorTexto, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "clientesValor",
    trigger: clientesValor,
    start: "top 70%",
    onEnter: () => {
        animaClientesValor.restart();
    },
    onLeaveBack: () => animaClientesValor.reverse(),
    markers: false
});