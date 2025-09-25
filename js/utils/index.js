
const linksList= document.querySelectorAll('a');

linksList.forEach(link => {
    link.addEventListener('click', () => window.scrollTo(0,0));
});


