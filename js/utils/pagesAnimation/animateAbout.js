
export function animateAboutPage() {
  const { inView, animate, stagger, } = Motion;

    // handle about_history&evoluation
    inView(".about-content", (el) => {
        const textItems = el.querySelectorAll("h1,h2,h3,h4,p");

        animate(
            textItems,
            { opacity: [0, 1], x: [-150, 0] },
            {
            duration: 0.7,
            delay: stagger(0.1), 
            easing: "ease-out",
            }
        );

    });

    inView(".about-page li", (el) => {
        animate(
            el,
            { 
                opacity: [0, 1], 
                x: [-150, 0] 
            },
            {
                duration: 0.7,
                delay: stagger(0.1), 
                easing: "ease-out",
            }
        );
    });

    inView(".about-img-overlay", (el) => {

        animate(
            el,
            { 
                opacity: [0, 1], 
                x: [350, 0] 
            },
            {
                delay: stagger(0.1),
                duration: 0.7,
                easing: "easeOut",
            }
        );
    });

    // handle about_imgs display
    inView(".about-page img", (el) => {
        animate(
            el,
            { 
                // opacity: [0, 1], 
                scale: [1.1, 1] 
            },
            { 
                duration: 1.3, 
                easing: "ease-out" 
            }
        );
    });

    // handle about_vision&mission
    inView(".vision-card", (el) => {
        animate(
            el,
            { 
                opacity: [0, 1], 
                y: [-200, 0], 
                rotateX: [-90, 0] 
            },
            { 
                duration: 1.2, 
                delay: 0.3, 
                easing: "ease-out" 
        }
    );
    });

    inView(".mission-card", (el) => {
        animate(
            el,
            { 
                opacity: [0, 1], 
                y: [-200, 0], 
                rotateX: [-90, 0] 
            },
            { 
                duration: 1.2, 
                delay: 0.3, 
                easing: "ease-out" 
            }
        );
    });
}



