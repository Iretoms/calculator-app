const prevTextEl = document.querySelector('.prevText')
const currentTextEl = document.querySelector('.currentText')
const clearBtn = document.getElementById('clear')
const backspaceBtn = document.getElementById('backspace')
const equalsBtn = document.getElementById('equals')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')



numberButtons.forEach(numberButton =>{
    numberButton.addEventListener('click',()=>{
        appendNumber(numberButton.innerText)    
    })
})

operatorButtons.forEach(operatorButton =>{
    operatorButton.addEventListener('click',()=>{
        chooseOperation(operatorButton.innerText)   
    })
})

clearBtn.addEventListener('click',()=>{
    clear()
})

equalsBtn.addEventListener('click',()=>{
    
})




function appendNumber(number){
    if(number === '.' && currentTextEl.innerText.includes('.')) return
    currentTextEl.innerText += number
}

function chooseOperation(operator){
    currentTextEl.innerText += operator
}

function clear(){
    currentTextEl.innerText = ''
    prevTextEl.innerText = ''
}

function backspace(){

}

function compute(){
    
}






