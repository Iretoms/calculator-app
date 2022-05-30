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

equalsBtn.addEventListener('click',compute)

backspaceBtn.addEventListener('click',()=>{
    backspace()
})


function appendNumber(number){
    if(number === '.' && prevTextEl.innerText.includes('.')) return
    prevTextEl.innerText += number
}

function chooseOperation(operator){
    prevTextEl.innerText += operator 
}

function clear(){
    currentTextEl.innerText = ''
    prevTextEl.innerText = ''
}

function backspace(){
    prevTextEl.innerText = prevTextEl.innerText.toString().slice(0,-1)
}

function compute(){
   let buttonText = this.innerText
   if(prevTextEl.innerText ==='') return
   if(buttonText === '='){
       currentTextEl.innerText = eval(prevTextEl.innerHTML)
   }
}










