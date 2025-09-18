import { displayHeader } from "../handlePges/handlePagesHeader.js";

export default function renderAboutPage(container) {
    container.innerHTML= `
    <div class="about-page">
    
        <!-- ABOUT-LAYOUT SECTION -->
        ${displayHeader('about-layout' , 'about-title' , 'who we are' , 'About El-Gamal Group' , 'Aseets/about/about-bg.jpg' , 'about-body')};

        <!-- ABOUT-HISTORY&EVOLUTION SECTION -->
        <section class="about-body mb-5 my-5">
            <div class="container">
                <div class="row align-items-center">
                
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="about-history">
                                <h3>Our History</h3>
                                <p class="pb-3">
                                    Established in 2007, our legacy in Contracting & trading & import reflects a steadfast commitment to excellence, innovation, and sustainable growth as a privately owned Egyptian company.
                                </p>
                            </div>

                            <div class="about-evolution">
                            <h3>Our Evolution</h3>
                            <p>
                                Over time, the company has experienced significant growth and development, evolving into a group that operates under a unified structure, comprising:
                            </p>
                            <ul>
                                <li>
                                    EL Gamal General Contracting and Construction(in Abu Dhabi, UAE)
                                </li>
                                <li>
                                    EL Gamal for contracting,trading and import
                                </li>
                                <li>
                                    EL Gamal Engineering & Metal Industries
                                </li>
                            </ul>
                            <p>
                                In addition to its subsidiaries, the group maintains strategic partnerships with:
                            </p>
                            <ul>
                                <li>
                                    Nakheel Misr for Contracting
                                </li>
                                <li>
                                    Arkan for Urban Planning
                                </li>
                            </ul>
                            </div> 
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="about-img">
                                <img src="Aseets/nav/elgamal-logo(bg).jpg" alt="EL-GAMAL GROUP">
                                <div class="about-img-overlay px-5">
                                    <i class="fa-solid fa-quote-left"></i>
                                    <p class="mb-0 text-center">
                                        Experts in construction, trading, and import — bringing seamless solutions to complex projects, anytime, anywhere.
                                    </p>
                                    <i class="fa-solid fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="about-content">
                            <p>
                                El Gamal Group has a strong track record of accomplishments and is committed to aligning all its projects with the goals of sustainable development to build a better future.
                            </p>
                            <p>
                                Over the years, the group has built a highly skilled and specialized team, embraced innovative methods, and remained dedicated to continuous development and transformation toward a brighter future.
                            </p>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="about-content">
                            <img class="img-fluid" src="Aseets/about/about-img3.jpg" alt="">
                        </div>

                    </div>

                </div>     
            </div>
        </section>

        <!-- ABOUT HIGHLIGHTS SECTION -->
        <section class="about-highlights mb-5 my-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 mb-5">
                        <div class="vision-card">
                            <div class="vison-title">
                                <h3 class="d-block mb-0">Our Vision</h3>
                            </div>
                            <div class="vision-paragraph pt-3">
                                <p>
                                    The goal of El Gamal Group is to become the number one choice for clients in the engineering sector, to expand the base of beneficiaries of our distinguished services, and to provide innovation and excellence in engineering solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-5">
                        <div class="mission-card">
                            <div class="mission-title">
                                <h3 class="d-block mb-0">Our Mission</h3>
                            </div>
                            <div class="mission-paragraph pt-3">
                                <p>
                                    To build, operate, and develop modern communities in Egypt and abroad in order to become leaders in the Egyptian and global markets. We aspire to achieve the highest standards of quality to reach a distinguished way of life.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <div class="values-card">
                            <h3>Our Values</h3>
                            <img class="img-fluid mb-5" src="Aseets/about/about-values.jpg" alt="">
                            <p>
                                At El-Gamal Group, we capitalize on our deep-rooted expertise, multidisciplinary teams, and expansive operational presence to foster impactful collaborations with startups. By enabling pilot implementations in real-world environments, we bridge innovation with execution—transforming novel ideas into scalable, strategic solutions that enhance our construction practices and operational standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <!-- ABOUT-CERTIFICATIONS SECTION -->
        <section class="about-certifications m-auto text-center mb-5 my-5">
            <div class="container">
                <div class="certification-title">
                    <h3>Our Certifications</h3>
                </div>
                <div class="row pt-3 gx-lg-5">
                    <div class="col-12 col-lg-6 m-auto text-center mb-5">
                        <div class="certificate-card">
                            <div class="certificate-name">
                                <span>ISO 45001 Certificate (OHSMS)</span>
                            </div>
                            <img class="img-fluid" src="Aseets/ISO/iso-1.png" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 text-center mb-5">
                        <div class="certificate-card">
                            <div class="certificate-name">
                                <span>ISO 45001 Certificate (QMS)</span>
                            </div>
                            <img class="img-fluid" src="Aseets/ISO/iso-2.png" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 m-auto text-center mb-5">
                        <div class="certificate-card">
                            <div class="certificate-name">
                                <span>ISO 14001 Certificate (EMS)</span>
                            </div>
                            <img class="img-fluid" src="Aseets/ISO/iso-3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ABOUT-PARTENERS SECTION -->
        <section class="about-parteners mb-5 my-5">
            <div class="container">
                <div class="parteners-title">
                    <h3>Our Parteners</h3>
                </div>

                <div class="swiper mySwiper pt-3">
                    <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="logo-card">
                                    <img class="img-fluid" src="Aseets/Logos/Elgamal1-logo.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="swiper-slide">
                                <div class="logo-card">
                                    <img class="img-fluid" src="Aseets/Logos/Elgamal3-logo.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="swiper-slide">
                                <div class="logo-card">
                                    <img class="img-fluid" src="Aseets/Logos/Elgamal2-logo.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="swiper-slide">
                                <div class="logo-card">
                                    <img class="img-fluid" src="Aseets/Logos/Arkan-logo.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="swiper-slide">
                                <div class="logo-card">
                                    <img class="img-fluid" src="Aseets/Logos/NakheilMasr-logo.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>

    `;

    // about-parteners swiper
    const swiper = new Swiper('.about-parteners .mySwiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        // centeredSlides: true,
        loop: true,
        // watchSlidesProgress: true,
        autoplay: {
            delay: 1000,
            // disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'slide',
        grabCursor: true,
        freeMode: true,
    });

}
