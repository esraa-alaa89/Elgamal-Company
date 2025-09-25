
export function animateContactPage() {
    const { inView, animate, stagger, } = Motion;

    // handle contact_intro_section
    inView(".contact-intro", (el) => {
        const textItems = el.querySelectorAll("h1,h2,h3,h4,p");

        animate(
            textItems,
            { opacity: [0, 1], y: [-150, 0] },
            {
                duration: 0.7,
                delay: stagger(0.08), 
                easing: "ease-out",
            }
        );

    });

    // handle contact_form_section
    inView(".form-section", (el) => {
        const textItems = el.querySelectorAll("h1,h2,h3,h4,p,label,input,textarea,button");

        animate(
            textItems,
            { 
                opacity: [0, 1], 
                x: [-150, 0] 
            },
            {
                duration: 0.7,
                delay: stagger(0.08), 
                easing: "ease-out",
            }
        );

    });
    
    inView(".about-btn", (el) => {
        animate(
            el,
            { 
                opacity: [0, 1], 
                x: [150, 0] 
            },
            {
                duration: 0.7,
                // delay: stagger(".form-section"), 
                easing: "ease-out",
            }
        );

    });
    

    // handle contact_right_section
    inView(".contact-info", (el) => {
        const textItems = el.querySelectorAll("h1,h2,h3,h4,p,li,i,a");

        animate(
            textItems,
            { opacity: [0, 1], x: [150, 0] },
            {
                duration: 0.7,
                delay: stagger(0.08), 
                easing: "ease-out",
            }
        );

    });
}