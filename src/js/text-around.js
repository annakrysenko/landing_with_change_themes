// Відстань між словами
const rotateBetweenWords = (value) => {
    const words = document.querySelectorAll('.wheel__word')
    
    let deg = -60
    
    for (let word of words) {
        word.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
}

// Відстань між буквами
const rotateBetweenLetters = (value) => {
    const letters = document.querySelectorAll('.wheel__letter')
    
    let deg = 0
    
    for (let letter of letters) {
        letter.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
    
}

rotateBetweenWords(15)
rotateBetweenLetters(10)