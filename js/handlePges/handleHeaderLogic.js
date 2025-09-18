// HANDLE TRANSITION IN NAV-BAR DURING SCROLL
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", ()=> controlHeaderScroll());

function controlHeaderScroll() {
    if(navCollapse.classList.contains('show')) return;

    // to know how much scroll on y-axis
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll === 0) { // at top of document
        // background is transparent
        header.classList.remove("show", "hide");
        header.classList.add("transparent");
    } 
    else if (currentScroll > lastScrollTop) { // scroll-down occured
        // scroll-down && hide header
        header.classList.remove("show", "transparent");
        header.classList.add("hide");
    } 
    else {
        // scroll-up && show header with white background
        header.classList.remove("hide", "transparent");
        header.classList.add("show");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}


// handle how to display nav-mobile-list
const navLinks= document.querySelectorAll('header .nav-link');
const navBtn = document.querySelector("header .nav-btn");
const navCollapse = document.querySelector("#navbarSupportedContent");
const exitBtn = document.querySelector(".exit-navbar");


const barsBtn = document.querySelector("header .fa-bars");
const closeBtn = document.querySelector("header .fa-xmark");


// to open mobile-nav by clicking on nav-button
navBtn.addEventListener("click", () => {
  navCollapse.classList.add("show");
  document.body.classList.add= 'mob-nav';

});

// to close mobile-nav by clicking on exit-button || Escape-key || nav-links
exitBtn.addEventListener("click", hideMobileNav);
document.body.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navCollapse.classList.contains('show')) {
      hideMobileNav();
  }
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e =>{
    
    if (e.target.getAttribute('href')) {
      hideMobileNav()
    }
  })
});

// function_logic to close mobile_nav
function hideMobileNav() {
  navCollapse.classList.remove("show");
  document.body.classList.remove= 'mob-nav';
}

// HANDLE NESTED_MENU OF PROJECTS ITEM
// document.addEventListener("DOMContentLoaded", () => {
  const projectItem = document.querySelector(".projects-item");
  const submenu = projectItem.querySelector(".projects-menu");
  const icon = projectItem.querySelector(".projectsMenu-icon");

  // const projectLinks = projectItem.querySelectorAll(".projects-menu a");

  projectItem.addEventListener("click", (e) => {
    // select link that haven't contain href_attribute
    // if (!e.target.getAttribute("href")) e.preventDefault();

    // to control open/close sub_menu
    submenu.classList.toggle("open");
    icon.classList.toggle("rotate");
  });

  // projectLinks.forEach(link => {
  //   link.addEventListener("click", () => {
  //     if (window.innerWidth < 991) {
  //       projectItem.classList.remove("open");
  //     }
  //   })
  // })

// })

// document.addEventListener("DOMContentLoaded", () => {
    // const projectItem = document.querySelector(".projects-item");
    // const projectLinks = projectItem.querySelectorAll(".projects-menu a");

    // projectItem.addEventListener("click", (e) => {
    //   // if (window.innerWidth < 992) {
    //     e.preventDefault(); 
    //     // projectItem.classList.toggle("open");
    //   // }
    // });

    // projectLinks.forEach(link => {
    //   link.addEventListener("click", () => {
    //     if (window.innerWidth < 991) {
    //       projectItem.classList.remove("open");
    //     }
    //   });
    // });


  // });



// document.addEventListener("DOMContentLoaded", () => {
//     const projectItem = document.querySelector(".projects-item");

//     projectItem.addEventListener("click", (e) => {
      
//       if (window.innerWidth <= 990) {
//         e.preventDefault();
//         projectItem.classList.toggle("open");
//       }
//     });
//   });
