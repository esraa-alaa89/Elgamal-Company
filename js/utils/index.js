
const linksList= document.querySelectorAll('a[class="nav-link"]');

linksList.forEach(link => {
    link.addEventListener('click', ()=>window.scrollTo(0,0));
});


