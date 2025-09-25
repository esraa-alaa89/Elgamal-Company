
import { displayHeader } from "./handlePagesHeader.js";
import { fetchProjectFile } from "../utils/fetchJsonFile.js";
import { animateProjectsPage } from "../utils/pagesAnimation/animateProjects.js";

export function singleProject(container, projectType) {
  
    const projectTypeHeading= projectType.replace(/-/g, ' '); // Residential-Project --> Residential Project

    container.innerHTML= `
        <!-- PROJECTS-LAYOUT SECTION -->
        ${displayHeader('projects-layout' , 'projects-title' , 'More about ..' , `${projectTypeHeading}`, 'Aseets/Projects-imgs/image1.jpg' , 'projects-body')}
    `
    // scroll to layout_body 
    const layoutHeight= document.querySelector('.projects-layout');
    const headerBtn= document.querySelector('.header-btn');

    headerBtn.addEventListener('click', ()=> {
        scrollTo(0,layoutHeight.scrollHeight);
    });

    renderSingleProject(container, projectTypeHeading);

    // display a single-project-type data
    function renderSingleProject(container,projectTypeHead) {

        const jsonFilePath = fetchProjectFile(projectTypeHead);
        fetch(jsonFilePath)
        .then(res => res.json())
        .then(data => {
            const projectCards = data.map((project) => {
                return `
                    <div class="single-project-card d-flex flex-column mb-5">
                        <h3>${project.projectName}</h3>
                        <div class="project-info col-12 pb-3">
                            ${project.projectLocation ? `
                                <div class="mb-3">
                                    <i class="fa-solid fa-location-dot pe-1"></i>
                                    <span>${project.projectLocation}</span>
                                </div>` : ''
                            }
                            ${project.projectArea ? `
                                <div class="mb-3">
                                    <i class="fa-solid fa-warehouse pe-1"></i>
                                    <span>${project.projectArea}</span>
                                </div>` : ''
                            }
                            ${project.projectDetails ? `
                                <div class="mb-3">
                                    <i class="fa-solid fa-info-circle pe-1"></i>
                                    <span>${project.projectDetails}</span>
                                </div>` : ''
                            }
                        </div>

                        <div class="col-lg-7 m-auto text-center bg-danger">
                            <div class="main-project-img m-auto text-center position-relative">
                                <div class="img-overlay"></div>
                                <img class="img-fluid" src="${project.projectMainImg}" alt="${project.projectName}" loading="lazy" />
                            </div>
                        </div>
                        <div class="project-imgs-container py-3">
                            <div class="row flex-wrap justify-content-center align-items-center g-2">
                                ${displayAllImgs(project)} 
                            </div>
                        </div>
                    </div>
                `
            });
        container.innerHTML += `
            <div class="projects-page">
                <div class="container">
                    <div class="row">
                        <div class="single-project-container">${projectCards}</div>
                    </div>
                </div>
            </div>
        `;
        
        animateProjectsPage();
                
        })
        .catch(err => {
            const errorMsg = document.createElement('p');
            errorMsg.style.color = 'red';
            errorMsg.textContent = `Error loading ${projectTypeHead} projects`;
            container += errorMsg;
            console.error('err here');
            console.error(err);
        });
    }

    // logic of how to display all imgs for each project

    function displayAllImgs(project) {
        const imgsList = project.projectImgslist;
        return imgsList.map((singleImg, index) => `
            <div class="col-4 col-lg-2">
                <div class="single-img" onclick='displayImgSlider(${index}, ${JSON.stringify(imgsList)})'>
                    <div class="img-overlay"></div>
                    <img class="img-fluid" src="${singleImg}" alt="${project.projectName}" loading="lazy" />
                </div>
            </div>`
        ).join('');
    }
    // NOTE: onclick-event call a method by the normal way directly & doesn't need to arrow function

    window.displayImgSlider = function(index, imgsList) {
        let currentIndex = index;
        let startX = 0;

        const imgsOverlayContainer = document.createElement('div');
        imgsOverlayContainer.classList.add('img-slider-overlay');
        imgsOverlayContainer.innerHTML = `
            <div class="slider-content">
                <img class="img-fluid slider-img img-fade" src="${imgsList[currentIndex]}" alt="Slider Image" />
                <i class="fa-solid fa-xmark close-btn"></i>
                <i class="fa-solid fa-arrow-left-long prev-btn"></i>
                <i class="fa-solid fa-arrow-right-long next-btn"></i>
            </div>
        `;
        document.body.appendChild(imgsOverlayContainer);

        const sliderContent = imgsOverlayContainer.querySelector('.slider-content');
        const sliderImg = imgsOverlayContainer.querySelector('.slider-img');
        const closeBtn = imgsOverlayContainer.querySelector('.close-btn');
        const prevBtn = imgsOverlayContainer.querySelector('.prev-btn');
        const nextBtn = imgsOverlayContainer.querySelector('.next-btn');

        function updateImage(direction) {
            sliderImg.classList.remove('img-fade');
            void sliderImg.offsetWidth; // void : to Reset animation on each img fade
            // offsetWidth : to return width-value of element as an integer 
            sliderImg.src = imgsList[currentIndex];
            sliderImg.classList.add('img-fade');
        }

        function showNext() {
            // currentIndex = (currentIndex + 1) % imgsList.length;
            currentIndex = (currentIndex + 1);
            if (currentIndex > imgsList.length -1) {
                currentIndex=0;
            }
            updateImage('next');
        }

        function showPrev() {
            // currentIndex = (currentIndex - 1 + imgsList.length) % imgsList.length;
            currentIndex = (currentIndex - 1);
            if (currentIndex < 0) {
                currentIndex= imgsList.length - 1;
            }
            updateImage('prev');
        }

        // handle next & previous buttons
        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);

        // handle close-btn & any-where click(on overlay) to close imgs-overlay
        closeBtn.addEventListener('click', closeOverlay);
        imgsOverlayContainer.addEventListener('click', (e) => {
            if (e.target === sliderContent) closeOverlay();
        });

        // imgsOverlayContainer.addEventListener('click', closeOverlay);

        function closeOverlay() {
            document.removeEventListener('keydown', keyboardHandler);
            imgsOverlayContainer.remove();
        }

        // handle keyboard clicks
        function keyboardHandler(e) {
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') closeOverlay();
        }
        document.addEventListener('keydown', keyboardHandler);

        // handle swipe on mobile
        sliderImg.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        sliderImg.addEventListener('touchend', (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (diff > 50) showNext();
            else if (diff < -50) showPrev();
        });
    };

    // CSS
    const style = document.createElement('style');
    style.textContent = `
    
    .img-fade {
        opacity: 0;
        animation: fadeIn 0.5s forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.98); }
        to { opacity: 1; transform: scale(1); }
    }
    `;

    document.head.appendChild(style);
}

  
