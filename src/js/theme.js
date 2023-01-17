   const refs = {
    htmlBlock : document.documentElement, // HTML root element (корневий елемент) 
    themeButton: document.querySelector('.theme__on'), // Кнопка теми
    resetThemeButton: document.querySelector('.theme__reset')
}

window.addEventListener('load', windowLoad)// Чекаємо, що вся сторінка прогрузилась  

function windowLoad() {

    const inLocalStorageTheme = localStorage.getItem('user-theme'); // Отримаємо збережену тему
    

    // Системні налаштування
    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        let currentTheme = refs.htmlBlock.classList.contains('light') ? 'light' : 'dark'; 
        !inLocalStorageTheme ? changeTheme() : null;
        
    }); 
    

    // ========== Функція додавання класу теми =======
    function setThemeClass() {
        if (inLocalStorageTheme) {
            refs.htmlBlock.classList.add(inLocalStorageTheme);
            refs.resetThemeButton.classList.add('active')
        }
        else {
            refs.htmlBlock.classList.add(userTheme);
        }
    }
    setThemeClass() 

    // Зміна теми по кліку
    if (refs.themeButton) {
        refs.themeButton.addEventListener('click', () => {
            refs.resetThemeButton.classList.add('active');
            changeTheme(true);
        })
    }
    if (refs.resetThemeButton) {
        refs.themeButton.addEventListener('click', () => {
            refs.resetThemeButton.classList.remove('active');
            localStorage.setItem('user-theme', '')
        })
    }

    //=================================================
    function changeTheme(saveTheme = false) {
        refs.themeButton.addEventListener('click', function () {
            let currentTheme = refs.htmlBlock.classList.contains('light') ? 'light' : 'dark'; 
            let newTheme;

            if (currentTheme === 'light') {
                newTheme = 'dark';
            }
            else if (currentTheme === 'dark') {
                newTheme = 'light';
            }

            refs.htmlBlock.classList.remove(currentTheme);
            refs.htmlBlock.classList.add(newTheme);  
            !saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        });  
    }
    //==================================================

}