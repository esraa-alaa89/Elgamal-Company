// IMPORT PAGES TO RENDER
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Services from "../pages/services.js";
import Projects from "../pages/projects.js";
import Contact from "../pages/contact.js";
import NotFound from "../pages/notfound.js";
import { singleProject } from "../handlePges/handleSingleProject.js";

// GET MAIN ELEMENT FRON INDEX.HTML
const mainElement= document.getElementById('main-content');


// ADD ROUTE FOR EACH PATH FROM THE NAV-BAR LINKS
const routes = {
  "#home": Home,
  "#about": About,
  "#services": Services,
  "#projects": Projects,
  "#contact": Contact,
  "*": NotFound
};


// ************** website -- loading initiate_icon **************

// HANDLE HASH OF TAB
function renderPageByHash() {
  // handle default display of content in hash of tab
  const hash= window.location.hash || '#home';

  // check if a specific type of projects is clicked
  if (hash.startsWith('#projects/')) { // #projects/Resedintial-project
    const projectType= hash.split('/')[1];
    singleProject(mainElement,projectType);

    return;
  }
  const renderPage= routes[hash] || Home;

  
  renderPage(mainElement);
}

// Listen to changes in the hash
window.addEventListener('hashchange', renderPageByHash);

// Also run on initial page load
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("show-spinner");
  }, 500);

  // when website is loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");

      // setTimeout(() => preloader.remove(), 1000);

      document.body.style.overflow = "auto";
      renderPageByHash();
    },1500)
  });

  // to stop initial virtical scroll
  document.body.style.overflow = "hidden";
});

