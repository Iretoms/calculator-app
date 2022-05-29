const answerEl = document.querySelector('.answer')
const inputEl = document.querySelector('.input')
const clearBtn = document.getElementById('clear')
const backspaceBtn = document.getElementById('backspace')
const equalsBtn = document.getElementById('equals')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')



numberButtons.forEach(numberButton =>{
    numberButton.addEventListener('click',()=>{
        inputEl.innerText += numberButton.innerText    
    })
})

operatorButtons.forEach(operatorButton =>{
    operatorButton.addEventListener('click',()=>{
        inputEl.innerText += operatorButton.innerText    
    })
})

clearBtn.addEventListener('click',()=>{
    inputEl.innerText = ''
})






