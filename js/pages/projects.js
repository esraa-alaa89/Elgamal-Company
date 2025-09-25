
import { displayHeader } from "../handlePges/handlePagesHeader.js";

const projectsTypesNames = [
  'Residential Project',
  'Roads Project',
  'Bridges Project',
  'Stations Project',
];

export default function Projects(container, projectType) {

  // 2 cases to be handled ******************************

  // if a specific project type is passed
  if (projectType) {
    const projectTypeHeading= projectType.replace(/-/g, ' '); // Residential-Project --> Residential Project

    container.innerHTML= `
    <div class="project-page">
      <!-- PROJECTS-LAYOUT SECTION -->
      ${displayHeader('projects-layout' , 'projects-title' , 'More about ..' , `${projectTypeHeading}`, 'Aseets/Projects-imgs/El-Alamain/pic-1.jpg' , 'projects-body')};
    </div>`

    renderProjectsPage(container, projectTypeHeading);
  }
  // all projects needed to be displayed
  else{
    for (const  projectType of projectsTypesNames ) {
      container.innerHTML= `<!-- PROJECTS-LAYOUT SECTION -->
      ${displayHeader('projects-layout' , 'projects-title' , 'what we do' , 'Our Projects' , 'Aseets/Projects-imgs/El-Alamain/pic-1.jpg' , 'projects-body')};` // display projects-header

      
      renderProjectsPage(container, projectType, 6); // display data of all projects as a projects-body
    }
  }
}

// get json-file to retrive project data
function projectFile(projectType) {
  const projectFileName= projectType.toLowerCase().replace(/\s+/g,'-');
  const jsonFile= `projectsData/${projectFileName}.json`;
  return jsonFile;
}

// display rhe project pendending on the clicked path
function renderProjectsPage(container, projectTypeHead, limit) {
  // retrive each json-file
  const jsonFilePath= projectFile(projectTypeHead); 

  fetch(jsonFilePath)
  .then(res => res.json())
  .then(data => {
    const limitedData = limit ? data.slice(0, limit) : data;

    const projectCards= limitedData.map(project => `
      <div class="col-lg-3">
        <div class="project-card">
          <img class="img-fluid" src="${project.projectMainImg}" alt="project-img" />
          <h4>${project.projectName}</h4>
        </div>
      </div>
    `);
    
    container.innerHTML += `<section class="project-body my-5">
      <div class="container">
        <h3 class="text-danger">${projectTypeHead}</h3>
        <div class="row bg-secondary">
          ${projectCards}
          <hr />
        </div>
      </div>
    </section>         
    `
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


