//                              Scroll into view                            //
const about = document.getElementById('aboutDiv');
const projects = document.getElementById('projectsDiv');
const info = document.getElementById('infoDiv');
const contact = document.getElementById('contactDiv');

document.querySelector('#about').onclick = () => {
    about.scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#project').onclick = () => {
    projects.scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#info').onclick = () => {
    info.scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#contact').onclick = () => {
    contact.scrollIntoView({behavior: 'smooth'});
}

//                               Theme Switcher                              //
const page = document.body;
const btn = document.getElementsByClassName('button');
const light = document.querySelector('#lightMode');
const dark = document.querySelector('#darkMode');

function lightTheme() {
    page.style.backgroundColor = "#FDFCFE";
    page.style.color = "#1F1F24";
    //change button color
    Array.from(btn).forEach(function(button) {
        button.style.color = "#1F1F24";
    })
}

function darkTheme() {
    page.style.backgroundColor = "#1F1F24";
    page.style.color = "#FDFCFE";
    Array.from(btn).forEach(function(button) {
        button.style.color = "#FDFCFE";
    })
}

function buttonColor() {
    btn.style.color = "#1F1F24";
}
light.onclick = lightTheme;
dark.onclick = darkTheme;