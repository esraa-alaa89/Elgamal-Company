import { handleHomeLogic } from "../handlePges/handleHomeLogic.js";
import { handleProjectsLogic } from "../handlePges/handleProjectsLogic.js";

export default function renderHomePage(container) {

    container.innerHTML= `
    <div class="home-page">
    
    <!-- SWIPER SECTION -->
    <section class="home-sec">
        <div id="particles-1"></div>
        
        <div class="swiper swiper-container main-slider">

            <div class="swiper-wrapper"></div>

            <!-- Pagination Numbers -->
            <div class="swiper-pagination"></div>

        </div>
    </section>
    

    <!-- ABOUT SECTION -->
    <section id="about" class="about-sec py-5">
        <div class="container">
            <div class="row align-items-center">
                <!-- LEFT ABOUT -->
                <div class="col-12 col-lg-6">
                    <div class="left-about row flex-lg-column gx-4 gx-lg-0 pb-5 pb-lg-0">
                        <div class="left-about-img">
                            <img class="" src="Aseets/about/richard-vijay-svl9YT3O8YQ-unsplash.jpg" alt="">
                        </div>
                    </div>
                </div>
                <!-- RIGHT ABOUT -->
                <div class="col-lg-6">
                    <div class="right-about">
                        <div class="about-title position-relative">
                            <h1 class="me-3">who we are</h1>
                            <h2>About Us</h2>
                        </div>
                        <p>
                            EL-GAMAL GROUP is one of the leading general contracting companies, having .successfully established its leadership in Egypt and the Middle East ,Over time, the company has experienced significant growth and development :evolving into a group that operates under a unified structure, comprising EL Gamal General Contracting and Construction (in Abu Dhabi, UAE) EL Gamal for contracting, Trading & import EL Gamal Engineering & Metal Industries
                        </p>
                        <div class="about-btn mt-4 mt-lg-4 mb-lg-4 d-flex">
                            <div class="explore-btn m-auto m-lg-0">
                                <a href="#about" class="custom-btn cta secondary"><span>Explore more</span></a>
                            </div>
                            <div class="profile-btn m-auto m-lg-0">
                                <a target="_blank" href="https://drive.google.com/file/d/1uBqABJTJljx2fuY7BRt-7IcJ8bRQnTnK/view?usp=drive_link" class="custom-btn cta secondary"><span>Visit profile</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ABOUT COUNTER-STATE  -->
        <div class="about-state-sec">
            <div class="container-fluid w-100 h-100 d-flex justify-content-center align-items-center">

                <div class="about-state-container"> 
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="436"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator="">
                                    </span>-K
                                    <span>m<sup>3</sup></span>
                                </h3>
                                <p class="pt-2">Excavation volume</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="751"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-K
                                    <span>m<sup>2</sup></span>
                                </h3>
                                <p class="pt-2">Building area</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="164"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-M
                                </h3>
                                <p class="pt-2">Bricks</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="569"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-K
                                    <span>m<sup>3</sup></span>
                                </h3>
                                <p class="pt-2">Concrete</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="6"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator="-">
                                    </span>-K
                                    <span>km</span>
                                </h3>
                                <p class="pt-2">Residential units</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="82"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator="-">
                                    </span>-M
                                </h3>
                                <p class="pt-2">Man-Power hours</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span>+</span>
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="8"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-M
                                </h3>
                                <p class="pt-2">Engineer hour</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="42"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-KM
                                </h3>
                                <p class="pt-2">Infrastructure</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="180"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-KM
                                </h3>
                                <p class="pt-2">Canal-lining</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 col-lg-3 col-xl-2 m-lg-2">
                        <div class="about-state-card text-center p-1">
                            <div class="about-state-text">
                                <h3 class="about-counter">
                                    <span class="purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="35"
                                        data-purecounter-duration="1"
                                        data-purecounter-separator=",">
                                    </span>-KM
                                </h3>
                                <p class="pt-2">Roads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <!-- SERVICE SECTION -->
    <section class="service-sec py-5" id="services">
        <div class="container">
            <!-- SERVICES TITLE -->
            <div class="service-title">
                <div class="col-12">
                    <h1 class="me-3">What we do</h1>
                    <h2 class="mb-lg-5">Our Services</h2>
                </div>
            </div>

            <!-- SERVICES CONTENT -->
            <div class="service-content">
                <div class="d-flex flex-wrap h-100 p-0"></div>
            </div>
        </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section class="projects-sec py-5" id="projects">
        <div class="container">

            <!-- PROJECTS TITLE -->
            <div class="projects-title">
                <div class="col-12">
                    <h1 class="me-3">Featured works</h1>
                    <h2 class="mb-lg-5">Our latest Projects</h2>
                </div>
            </div>

            <!-- PROJECTS CONTENT -->
            <div class="projects-swiper-container"></div>

        </div>
    </section>
    </div
`
handleHomeLogic();
handleProjectsLogic();

};


