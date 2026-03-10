
    gsap.registerPlugin(ScrollTrigger);

    const enfoqueTitle = document.getElementById('enfoqueTitle');
    const enfoqueText1 = document.getElementById('enfoqueText1');
    const enfoqueSubtitle = document.getElementById('enfoqueSubtitle');
    const enfoqueTrailer = document.getElementById('enfoqueTrailer');

    // Animación título
    const animaEnfoqueTitle = gsap.fromTo(enfoqueTitle,
      { left:-200, opacity: 0 },
      { left:0, opacity: 1, duration: 0.4, paused: true }
    );

    ScrollTrigger.create({
      id: "enfoqueTitle",
      trigger: enfoqueTitle,
      start: "top 75%",
      onEnter: () => animaEnfoqueTitle.restart(),
      onLeaveBack: () => animaEnfoqueTitle.reverse(),
      /*markers: true*/
    });

    // Animación textos
    let animaEnfoqueText = gsap.timeline({ paused: true });
    animaEnfoqueText.fromTo(enfoqueText1, { left: -100, opacity:0 }, { left: 0, opacity:1, duration: 0.5, ease:"power2.out"})
                    .fromTo(enfoqueSubtitle, { scale:1.5, opacity:0 }, { scale:1, opacity:1, duration:0.5 }, "-=0.3");

    ScrollTrigger.create({
      id: "enfoqueText",
      trigger: enfoqueText1,
      start: "top 65%",
      onEnter: () => animaEnfoqueText.restart(),
      onLeaveBack: () => animaEnfoqueText.reverse(),
      /*markers: true*/
    });

    // Animación trailer
    const animaEnfoqueTrailer = gsap.fromTo(enfoqueTrailer,
      { scale: 2, opacity: 0 },
      { scale:1, opacity: 1, duration: 0.5, paused: true }
    );

    ScrollTrigger.create({
      id: "enfoqueTrailer",
      trigger: enfoqueTrailer,
      start: "top 45%",
      onEnter: () => animaEnfoqueTrailer.restart(),
      onLeaveBack: () => animaEnfoqueTrailer.reverse(),
      /*markers: true*/
    });