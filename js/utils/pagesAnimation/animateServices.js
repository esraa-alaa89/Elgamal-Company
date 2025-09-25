
export function animateServicesPage() {
  const { inView, animate, stagger } = Motion;

  // handle intro_services
  inView(".services-intro", el => {
    animate(el, 
        { opacity: [0, 1], y: [-350, 0] },
        { duration: 0.8, easing: "ease" }
        
    )
  });

  // handle left_services
  inView(".left-service", (el) => {
    const textItems = el.querySelectorAll("h1,h2,h3,h4,p,li");

    if (textItems.length > 0) {
      animate(
        textItems,
        { 
          opacity: [0, 1], 
          x: [-150, 0] 
        },
        {
          duration: 0.7,
          delay: stagger(0.5), 
          easing: "ease-out",
        }
      );
    } 
    else {

        const img = el.querySelector("img");
        const target = img || el;

        animate(
            target,
            { 
              opacity: [0, 1], 
              x: [-150, 0] 
            },
            { 
              duration: 0.8, 
              easing: "ease-out" 
            }
        );
    }

  });

  // handle right_services
  inView(".right-service", (el) => {
    const textItems = el.querySelectorAll("h1,h2,h3,h4,p,li");

    if (textItems.length > 0) {
        animate(
          textItems,
          { 
            opacity: [0, 1], 
            x: [150, 0] 
          },
          {
            duration: 0.7,
            delay: stagger(0.5), 
            easing: "ease-out",
          }
        );
    } 
    else {
      const img = el.querySelector("img");
      const target = img || el;
      animate(
          target,
          { 
            opacity: [0, 1],
             x: [150, 0] 
            },
          { 
            duration: 0.8, 
            easing: "ease-out" 
          }
      );
    }
  });
}



