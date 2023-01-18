'use strict'
window.addEventListener('load', windowLoad)// Чекаємо, що вся сторінка прогрузилась  

function windowLoad() {

    const htmlBlock = document.documentElement; // HTML root element (корневий елемент)
    const inLocalStorageTheme = localStorage.getItem('user-theme'); // Отримаємо збережену тему


    // Системні налаштування
    let userThemeOS;
    // if (window.matchMedia) {
    userThemeOS = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
    // }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  
        console.log('inLocalStorageTheme ===>',inLocalStorageTheme)
        if (!inLocalStorageTheme) {
          console.log('empthy local');
          changeTheme();  
        }  
        else {
          console.log('NOT EMPTY local')
        }
    }); 
    
    // Зміна теми по кліку
    const themeButton = document.querySelector('.theme__on'); // Кнопка теми
    const  resetThemeButton = document.querySelector('.theme__reset'); // Кнопка скидання налаштувань користувача
    
    themeButton.addEventListener('click', function (e) {
        resetThemeButton.classList.add('active');
        changeTheme(true);
    });

    resetThemeButton.addEventListener('click', function(e)  {
        resetThemeButton.classList.remove('active');
        localStorage.setItem('user-theme', '');
        setThemeClass();
    });
    

    ========== Функція додавання класу теми =======
    function setThemeClass() {
        if (inLocalStorageTheme) {
            htmlBlock.classList.add(inLocalStorageTheme);
            resetThemeButton.classList.add('active')
        }
        else {
            htmlBlock.classList.add(userThemeOS);
        }
    }
    setThemeClass() 

    

    //=================================================
    function changeTheme(saveTheme = false) {

            let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'; 
            let newTheme;

            if (currentTheme === 'light') {
                newTheme = 'dark';
            }
            else if (currentTheme === 'dark') {
                newTheme = 'light';
            }

            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);  
            saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        };  
    
    //==================================================

}