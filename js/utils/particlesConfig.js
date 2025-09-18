export function applyParticles(elements) {
    
    const particlesConfig= {
    particles: {
      number: { value: 80 }, /* num of points*/
      color: { value: "#ffffff" }, /* points color */
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 1 },
      line_linked: {
        enable: true,
        distance: 120, /* distance between points*/
        color: "#ffffff",
        opacity: 0.6,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        random: true,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
      }
    },
    retina_detect: true
  }
  
  elements.forEach(id => {
      particlesJS(id, particlesConfig)
    })

  
}