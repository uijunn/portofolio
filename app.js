// script.js
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const myButton = document.querySelector('#back-to')
const profileSec = document.querySelector('#profile')

darkModeToggle.addEventListener('click', toggleDarkMode);

//DARK MODE
// user preferences sesuai pengaturan sistem
const userPreference = localStorage.getItem('darkMode');
if (userPreference) {
    html.classList.toggle('dark', userPreference === 'true');
    if (userPreference === 'true') {
        darkModeToggle.innerHTML = 'LHT'
    }
    else {
        darkModeToggle.innerHTML = 'DRK'
    }
}

// fungsi mengubah tulisan dan tema antara dark dan light mode 
function toggleDarkMode() {
    html.classList.toggle('dark')
    var isDarkMode = html.classList.contains('dark')
    localStorage.setItem('darkMode', isDarkMode)
    if (isDarkMode) {
        darkModeToggle.innerHTML = 'LHT'
    }
    else {
        darkModeToggle.innerHTML = 'DRK'
    }
}

//BACK TO TOP
window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > profileSec.offsetHeight || document.documentElement.scrollTop > profileSec.offsetHeight) {
        myButton.style.display = 'block'
    }
    else {
        myButton.style.display = 'none'
    }
}