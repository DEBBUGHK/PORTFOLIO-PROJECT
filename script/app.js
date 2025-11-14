// ---------------- Navigation Bar ---------------------------------------------

const navigationLabels = ['home', 'about', 'projects', 'skills', 'contact'];
const navBar = document.querySelector('ul');

for(var i=0; i<navigationLabels.length; i++){
    const label = navigationLabels[i].toUpperCase();
    navBar.innerHTML += `<li><a href="#${label.toLowerCase()}" id="link-${i}">${label}</a></li>`;
}

navBar.style.listStyle = 'none';

