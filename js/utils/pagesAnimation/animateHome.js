
export function animateHomePage() {
    const { inView, animate, stagger, } = Motion;

    // handle services_section
    inView('.container', el => {

        const textItems= el.querySelectorAll('.sec-title , .sec-preTitle');

        animate(
            textItems,
            { 
                opacity: [0, 1], 
                x: [-150, 0] 
            },
            {
                duration: 0.7,
                delay: stagger(0.08), 
                easing: "easeInOut",
            }
        );
    });

    // handle about_section
    inView('.about-sec', el => {

        animate(
            '.left-about',
            {
                opacity: [0, 1], 
                x: [-150, 0] 
            },
            {
                duration: 0.7,
                delay: stagger(0.9), 
                easing: "easeInOut",
            }
        );
        
        const textItems= el.querySelectorAll("h1,h2,p,a");        
        animate(
            textItems,
            { 
                opacity: [0, 1], 
                x: [150, 0] 
            },
            {
                duration: 0.7,
                delay: stagger(0.2), 
                easing: "easeInOut",
            }
        );
    })
    
    // handle services_section
    inView('.service-card', el => {

        animate(
            el,
            { 
                opacity: [0, 0.7], 
                y: [1000, 0] 
            },
            {
                duration: 1,
                delay: stagger(1), 
                easing: "easeInOut",
            }
        );
    });

}