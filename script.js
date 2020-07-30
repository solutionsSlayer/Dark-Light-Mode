const checkInput = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const title = document.getElementsByTagName('h1');
const nav = document.querySelector('#nav');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const imageContainer = document.querySelectorAll('.image-container');
const textBox = document.querySelector('#text-box');

console.log(imageContainer);

function themeSwitch(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark");
        toggleLighDarkMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light");
        toggleLighDarkMode(false)
    }
};

function toggleLighDarkMode(isDark) {
    isDark ? changeColorImages('dark') : changeColorImages('light');
    isDark ? changeColorH1AndTextElements('255', '1') : changeColorH1AndTextElements('0', '.5');
    isDark ? changeColorOfToggleElements('Dark Mode') : changeColorOfToggleElements('Light Mode');
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');  
}

function changeColorH1AndTextElements(color, opacity) {
    for(let i = 0; i < title.length; i++) {
        title[i].style.color = `rgba(${color}, ${color}, ${color}, ${opacity})`;
    }
    textBox.style.backgroundColor = `rgba(${color}, ${color}, ${color}, ${opacity})`;
};

function changeColorOfToggleElements(text) {
    toggleIcon.children[0].textContent = text;
    if(text === 'Dark Mode') {
        toggleIcon.children[1].style.color = 'rgb(255, 255, 255)';
        nav.style.backgroundColor = 'rgba(0, 0, 0, .55)';
    } else {
        toggleIcon.children[1].style.color = 'rgb(0, 0, 0)';
        nav.style.backgroundColor = 'rgba(255, 255, 255)';
    }
}

function changeColorImages(color) {
    let el; 
    for(let i = 0; i < imageContainer.length; i++) {
        if(color === 'dark') {
            el = imageContainer[i].children[1];
            src = el.src.replace('dark', 'light');
        } else {
            el = imageContainer[i].children[1];
            src = el.src.replace('light', 'dark');
        }     
    }
}

checkInput.addEventListener('change', themeSwitch);

const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', currentTheme);
    checkInput.checked = true;
    toggleLighDarkMode(true);
} 