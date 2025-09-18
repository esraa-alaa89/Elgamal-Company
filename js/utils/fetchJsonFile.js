export function fetchProjectFile(projectType) {

    // retrive each json-file of project-data
    const jsonFile= projectType.toLowerCase().replace(/\s+/g, '-');
    return `projectsData/${jsonFile}.json`;
}