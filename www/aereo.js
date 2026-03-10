gsap.registerPlugin(ScrollTrigger);

    // TITULOS
    gsap.from("#title1", {y:-50, opacity:0, duration:0.4, scrollTrigger:{trigger:"#title1", start:"top 70%", toggleActions:"play none none reverse"}});
    gsap.from("#title2", {y:-50, opacity:0, duration:0.4, scrollTrigger:{trigger:"#title2", start:"top 70%", toggleActions:"play none none reverse"}});

    // PÁRRAFOS
    gsap.from("#text1", {y:30, opacity:0, duration:0.4, scrollTrigger:{trigger:"#text1", start:"top 75%", toggleActions:"play none none reverse"}});
    gsap.from("#text2", {y:30, opacity:0, duration:0.4, scrollTrigger:{trigger:"#text2", start:"top 75%", toggleActions:"play none none reverse"}});
    

    // TIMELINE PUNTOS
    var tl = gsap.timeline({scrollTrigger:{trigger:"#puntos", start:"top 70%", toggleActions:"play none none reverse"}});
    tl.from("#punto1",{x:-50,opacity:0,duration:0.1})
      .from("#punto2",{x:-50,opacity:0,duration:0.1})
      .from("#punto3",{x:-50,opacity:0,duration:0.1})
      .from("#punto4",{x:-50,opacity:0,duration:0.1})
      .from("#punto5",{x:-50,opacity:0,duration:0.1})
      .from("#punto6",{x:-50,opacity:0,duration:0.1});

    // AVIÓN
    gsap.from("#avion",{y:50, opacity:0, duration:1, scrollTrigger:{trigger:"#avion", start:"top 70%", toggleActions:"play none none reverse"}});