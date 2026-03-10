 gsap.registerPlugin(ScrollTrigger);
    
    const ser1 = document.getElementById('ser1');
    const ser1Text = document.getElementById('ser1Text');
    
    const ser2 = document.getElementById('ser2');
    const ser2Text = document.getElementById('ser2Text');
    
    const ser3 = document.getElementById('ser3');
    const ser3Text = document.getElementById('ser3Text');
    
    const ser4 = document.getElementById('ser4');
    const ser4Text = document.getElementById('ser4Text');
    
    const ser5 = document.getElementById('ser5');
    const ser5Text = document.getElementById('ser5Text');
    
    const ser6 = document.getElementById('ser6');
    const ser6Text = document.getElementById('ser6Text');
    
    const ser7 = document.getElementById('ser7');
    const ser7Text = document.getElementById('ser7Text');
    
    const ser8 = document.getElementById('ser8');
    const ser8Text = document.getElementById('ser8Text');
    
    const beneTitles = document.getElementById('beneTitles');
    const beneLogo = document.getElementById('beneLogo');
    
    
    let animaBene = gsap.timeline({ paused: true });
    
    animaBene.fromTo(beneTitles, { left: -200, opacity:0 }, { left: 0, opacity:1, ease: "power2.out", duration: 0.5})
     .fromTo(beneLogo, { scale:3,left: 100, opacity:0 }, { scale:1, left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "beneTitles",
    trigger: beneTitles,
    start: "top 60%",
    onEnter: () => {
        animaBene.restart();
    },
    onLeaveBack: () => animaBene.reverse(),
    markers: false
});
    
    
    
    
    let animaSer1 = gsap.timeline({ paused: true });
    
    animaSer1.fromTo(ser1, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser1Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser1",
    trigger: ser1,
    start: "top 60%",
    onEnter: () => {
        animaSer1.restart();
    },
    onLeaveBack: () => animaSer1.reverse(),
    markers: false
});
    
    let animaSer2 = gsap.timeline({ paused: true });
    
    animaSer2.fromTo(ser2, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser2Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser2",
    trigger: ser2,
    start: "top 60%",
    onEnter: () => {
        animaSer2.restart();
    },
    onLeaveBack: () => animaSer2.reverse(),
    markers: false
});
    
     let animaSer3 = gsap.timeline({ paused: true });
    
    animaSer3.fromTo(ser3, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser3Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser3",
    trigger: ser3,
    start: "top 60%",
    onEnter: () => {
        animaSer3.restart();
    },
    onLeaveBack: () => animaSer3.reverse(),
    markers: false
});
    
    let animaSer4 = gsap.timeline({ paused: true });
    
    animaSer4.fromTo(ser4, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser4Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser4",
    trigger: ser4,
    start: "top 60%",
    onEnter: () => {
        animaSer4.restart();
    },
    onLeaveBack: () => animaSer4.reverse(),
    markers: false
});
    
    let animaSer5 = gsap.timeline({ paused: true });
    
    animaSer5.fromTo(ser5, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser5Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser5",
    trigger: ser5,
    start: "top 60%",
    onEnter: () => {
        animaSer5.restart();
    },
    onLeaveBack: () => animaSer5.reverse(),
    markers: false
});
    
    let animaSer6 = gsap.timeline({ paused: true });
    
    animaSer6.fromTo(ser6, { top: -100, opacity:0 }, { top: 0, opacity:1, ease: "power2.out", duration: 0.7})
     .fromTo(ser6Text, { left: 100, opacity:0 }, { left: 0, opacity:1, duration: 0.5 },"-=0.4");
    
    ScrollTrigger.create({
    id: "ser6",
    trigger: ser6,
    start: "top 60%",
    onEnter: () => {
        animaSer6.restart();
    },
    onLeaveBack: () => animaSer6.reverse(),
    markers: false
});
    
    let animaSer7 = gsap.timeline({ paused: true });

animaSer7.fromTo(ser7, { top: -100, opacity: 0 }, { top: 0, opacity: 1, ease: "power2.out", duration: 0.7 })
    .fromTo(ser7Text, { left: 100, opacity: 0 }, { left: 0, opacity: 1, duration: 0.5 }, "-=0.4");

ScrollTrigger.create({
    id: "ser7",
    trigger: ser7,
    start: "top 60%",
    onEnter: () => {
        animaSer7.restart();
    },
    onLeaveBack: () => animaSer7.reverse(),
    markers: false
});

    let animaSer8 = gsap.timeline({ paused: true });

animaSer8.fromTo(ser8, { top: -100, opacity: 0 }, { top: 0, opacity: 1, ease: "power2.out", duration: 0.7 })
    .fromTo(ser8Text, { left: 100, opacity: 0 }, { left: 0, opacity: 1, duration: 0.5 }, "-=0.4");

ScrollTrigger.create({
    id: "ser8",
    trigger: ser8,
    start: "top 60%",
    onEnter: () => {
        animaSer8.restart();
    },
    onLeaveBack: () => animaSer8.reverse(),
    markers: false
});
