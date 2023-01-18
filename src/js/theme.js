const themeButtonEl = document.querySelector('.theme__on'); // Кнопка теми
const resetThemeButtonEl = document.querySelector('.theme__reset'); // Кнопка скидання налаштувань користувача
const htmlEl = document.documentElement; // HTML root element (корневий елемент)
const themeContainerEl = document.querySelector('.theme-container') 

const inLocalStorageTheme = localStorage.getItem('user-theme'); // Отримаємо збережену тему


window.addEventListener('load', windowLoad)// Чекаємо, що вся сторінка прогрузилась 

function windowLoad() {
    setThemeClass() // Дивиться чи є в локал стореджі брережена тема, якщо не - системна тема
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setOsTheme) 

    themeButtonEl.addEventListener('click', changeTheme);
    resetThemeButtonEl.addEventListener('click', setOsTheme);
     
}

function setThemeClass() {
    if (inLocalStorageTheme) {
        htmlEl.classList.add(inLocalStorageTheme);
        resetThemeButtonEl.classList.add('active')
    }
    else {
       setOsTheme()
    }
}
function setOsTheme() {
    let userThemeOS = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; // Отримуємо тему операційної системи

    if (htmlEl.classList.contains('light')) {
        htmlEl.classList.toggle('light');
    }
    else {
        htmlEl.classList.toggle('dark');  
    }

    htmlEl.classList.add(userThemeOS);
    localStorage.removeItem('user-theme');

    resetThemeButtonEl.classList.remove('active');
};

function changeTheme() { 
    let currentTheme = htmlEl.classList.contains('light') ? 'light' : 'dark'; 
    let newTheme;

    if (currentTheme === 'light') {
        newTheme = 'dark';
    }
    else if (currentTheme === 'dark') {
        newTheme = 'light';
    }

    htmlEl.classList.remove(currentTheme);
    htmlEl.classList.add(newTheme);  

    
    localStorage.setItem('user-theme', newTheme)
    
    resetThemeButtonEl.classList.add('active');  
};
