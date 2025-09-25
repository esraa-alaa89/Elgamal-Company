import { fetchProjectFile } from "../utils/fetchJsonFile.js";

export function handleProjectsLogic() {
    const projectsTypesNames = [
        'Factory Project',
        'Residential Project',
        'Roads Project',
        'Bridges Project',
        'Stations Project',
    ];

    const projectsSwiperContainer = document.querySelector('.projects-sec .projects-swiper-container');
    if (!projectsSwiperContainer) return `<h1>Projects not loaded yet!</h1>`;

    let totalProjects = projectsTypesNames.length;
    let loadedProjects = 0;

    for (const projectType of projectsTypesNames) {
        renderProjectsPage(projectType, 6, ()=> {
            loadedProjects++;
            if (loadedProjects == totalProjects) {
                initAllSwipers()
            }
        })
    }

    // fetch each json-file & display all projects
    function renderProjectsPage(projectTypeHead, limit , callback) {
        const projectFileName= projectTypeHead.toLowerCase().replace(/\s+/g, '-');
        const jsonFilePath = fetchProjectFile(projectTypeHead);

        fetch(jsonFilePath)
            .then(res => res.json())
            .then(data => {
                const limitedData = limit ? data.slice(0, limit) : data;
                

                const projectCards = limitedData.map(project => `
                    <div class="row d-flex swiper-slide">           
                        <div class="project-card bg-info">
                            <img class="img-fluid" src="${project.projectMainImg}" alt="${project.projectName}" loading="lazy" />

                            <div class="project-info d-flex justify-content-between align-items-center"> 
                                <h4>${project.projectName}</h4>
                                <div><i class="fa-solid fa-arrow-right-long"></i></div>
                            </div>
                        </div>
                    </div> 
                `);

                projectsSwiperContainer.innerHTML += `
                        <h3 class="py-3">${projectTypeHead}</h3>
                        <div class="swiper swiper-container mySwiper ">
                            <div class="swiper-wrapper">${projectCards}</div>
                        </div>

                        <div class="projects-btn mt-4 mt-lg-4 mb-lg-4 d-flex">
                            <div class="explore-btn m-lg-0">
                                <a href="#projects/${projectFileName}" class="custom-btn cta secondary"><span>View more ${projectTypeHead}</span></a>
                            </div>
                        </div>
                    </div>
                `;
                
                callback();

                // initAllSwipers();
            })
            .catch(err => {
                const errorMsg = document.createElement('p');
                errorMsg.style.color = 'red';
                errorMsg.textContent = `Error loading ${projectTypeHead} projects`;
                projectsSwiperContainer += errorMsg;
                console.error('err here');
                console.error(err);
            });
    }

    // projects swiper
    function initAllSwipers() {
        const allSwipers = document.querySelectorAll('.projects-sec .swiper-container');
        allSwipers.forEach(swiperEl => {
            new Swiper(swiperEl, {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: swiperEl.querySelectorAll('.projects-sec .swiper-container.swiper-slide').length > 2,
                // swiperEl.querySelectorAll('.swiper-slide').length > 3
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                grid: {
                    rows: 1,
                    fill: 'row',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                effect: 'slide',
                grabCursor: true,
            });
        });
    }
}
