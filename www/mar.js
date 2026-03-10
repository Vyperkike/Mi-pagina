gsap.registerPlugin(ScrollTrigger);

// Selección de elementos
const marTitles = document.querySelectorAll('.marTitles');
const marTextos = document.querySelectorAll('.marTexto');
const marPuntuals = document.querySelectorAll('.marPuntual');
const marCircle = document.querySelector('.marCircle');

// Animación de títulos
marTitles.forEach(function(title) {
  const animTitle = gsap.fromTo(title,
    { left: -200, opacity: 0 },
    { left: 0, opacity: 1, duration: 0.7, paused: true }
  );

  ScrollTrigger.create({
    trigger: title,
    start: "top 70%",
    onEnter: () => animTitle.restart(),
    onLeaveBack: () => animTitle.reverse(),
   /*markers: true*/
  });
});

// Animación de párrafos de texto
marTextos.forEach(function(text, index) {
  const direction = index % 2 === 0 ? -100 : 100; // alterna izquierda y derecha
  const animText = gsap.fromTo(text,
    { left: direction, opacity: 0 },
    { left: 0, opacity: 1, duration: 0.5, ease: "power2.out", paused: true }
  );

  ScrollTrigger.create({
    trigger: text,
    start: "top 70%",
    onEnter: () => animText.restart(),
    onLeaveBack: () => animText.reverse(),
    /*markers: true*/
  });
});

// Animación de elementos de servicio (marPuntual)
marPuntuals.forEach(function(item) {
  const animItem = gsap.fromTo(item,
    { scale: 1.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, paused: true }
  );

  ScrollTrigger.create({
    trigger: item,
    start: "top 70%",
    onEnter: () => animItem.restart(),
    onLeaveBack: () => animItem.reverse(),
    /*markers: */
  });
});

// Animación del círculo (similar al brillo de terrestrePleca)
const animCircle = gsap.fromTo(marCircle,
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.4, paused: true }
);

ScrollTrigger.create({
  trigger: marCircle,
  start: "top 80%",
  onEnter: () => animCircle.restart(),
  onLeaveBack: () => animCircle.reverse(),
 /* markers: true*/
});