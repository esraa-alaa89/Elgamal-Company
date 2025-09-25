
export function animateProjectsPage() {
    const { inView, animate, stagger, } = Motion;
    const projectsPages= document.querySelectorAll('.projects-page');
    projectsPages.forEach(projectPage => {
        
        const cards= document.querySelectorAll('.projects-page .single-project-container .single-project-card');

        cards.forEach((card,i) => {
                
            const textItems = card.querySelectorAll("h1,h2,h3,h4,p,i,span");
            inView(card, () => {
                animate(
                    textItems,
                    { 
                        opacity: [0, 1], 
                        x: [150, 0] 
                    },
                    {
                        duration: 0.7,
                        delay: stagger(0.08), 
                        easing: "easeInOut",
                    }
                );
            })
        });
    });
    
}
