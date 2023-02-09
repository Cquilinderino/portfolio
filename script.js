const page = document.body;
// const btn = document.getElementById('home');
const btn = document.getElementsByClassName('button');
const light = document.querySelector('#lightMode');
const dark = document.querySelector('#darkMode');

function lightTheme() {
    page.style.backgroundColor = "#FDFCFE";
    page.style.color = "#1F1F24";
    // btn.style.color = '#1F1F24';
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