import { applyParticles } from "../utils/particlesConfig.js";

export function handleHomeLogic() {
  // ********* SWIPER HANDLING *********
  const homeSwiperData= [
    {
      image: 'Aseets/home-swiper/swiper-1.jpg',
      title: 'EL-GAMAL GROUP',
      metaTitle: 'for constructing & trading & import',
      paragraph: 'Leading transformative growth across infrastructure, logistics, and trade by combining expertise with a future-forward mindset.',
    },

    {
      image: 'Aseets/home-swiper/swiper-2.jpg',
      title: '16',
      metaTitle: 'years of experince',
      paragraph: 'Built on decades of reliability, innovation, and client-focused solutions that consistently exceed expectations.',
    },

    {
      image: 'Aseets/home-swiper/swiper-3.jpg',
      title: '103',
      metaTitle: 'Projects Delivered with Excellence',
      paragraph: 'From concept to completion, our portfolio reflects precision, collaboration, and lasting value across every project.',
    },
  ];

  const swiperWrapper = document.querySelector('.home-sec .swiper-wrapper');
  if (!swiperWrapper) return `<h1 class="text-dark text-center">Loading...</h1>`;
  let slideDiv;
  
  homeSwiperData.forEach((slide, index) => {
    const isFirst = index === 0;
    slideDiv = document.createElement('div');
    slideDiv.className = 'swiper-slide';
    slideDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('${slide.image}')`;

    const welcomeMessage = isFirst ? 'Welcome to' : '';
    const titleClass = isFirst ? 'home-title first-slide-title' : 'home-title';

    slideDiv.innerHTML = `
      <div class="home-content">
        <h3 class="home-congrats">${welcomeMessage}</h3>
        ${
          !isFirst ? `
          <div class="d-flex align-items-center">
            <h1 class="${titleClass}">${slide.title}</h1>
            <span class="${titleClass}">+</span>
          </div>`
          : 
          `<h1 class="${titleClass}">${slide.title}</h1>`
        }
        <p class="home-focus">${slide.metaTitle}</p>
        <p class="home-caption px-3 px-lg-0">${slide.paragraph}</p>
        <div class="home-profile-btn">
          <a class="home-profile-click" target="_blank" href="https://drive.google.com/file/d/1uBqABJTJljx2fuY7BRt-7IcJ8bRQnTnK/view?usp=drive_link">Profile view</a>
          <i class="fa-solid fa-eye home-profile-icon"></i>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(slideDiv);
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      reversedDirection: false,
      disableOnInteraction: false,
    },
    speed: 3000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',       
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: ['-100%', 0, 0],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    grabCursor: true, // to show hand when moving slide
  });

  // sisplay particles_animation library on each home_wiper & header_in_phone
  applyParticles(['particles-1','particles-2','particles-3']);

  // ********* ABOUT_SECTION *********
  // for loading about-counter manualy
  new PureCounter();


  // ********* SERVICES_SECTION *********
  const servicesData= [
    {
      image: 'Aseets/services/service-1.jpg',
      title: 'Construction'
    },

    {
      image: 'Aseets/services/service-2.jpg',
      title: 'Roads and Bridges'
    },

    {
      image: 'Aseets/services/service-3.jpg',
      title: 'Infrastructure'
    },

    {
      image: 'Aseets/services/service-4.jpg',
      title: 'Lining of canals'
    },

    {
        image: 'Aseets/services/service-5.jpg',
        title: 'Maintenance and restoration'
    },

    {
        image: 'Aseets/services/service-6.jpg',
        title: 'Finishing and decoration'
    },

  ];

  const servicesContentRow= document.querySelector('.service-content .d-flex');
  if (!servicesContentRow) return;

  servicesData.forEach(serviceCard => {  
    const serviceCardDiv= document.createElement('div');
    serviceCardDiv.className= 'col-6 col-lg-2';
    serviceCardDiv.innerHTML= `<div class="service-card">
      <h3>${serviceCard.title}</h3>
    </div>`;
    serviceCardDiv.addEventListener('mouseenter' , () => {
      servicesContentRow.parentElement.style.background= `
        linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        url('${serviceCard.image}') center center / cover no-repeat
      `;
      servicesContentRow.style.transition= 'all 0.2s ease-in-out';
      serviceCardDiv.style.transition= 'all 0.2s ease-in-out';
    });
    servicesContentRow.appendChild(serviceCardDiv);
  });


}

