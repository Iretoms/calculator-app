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
        compute()
})

backspaceBtn.addEventListener('click',()=>{
    backspace()
})


function appendNumber(number){
    if(number === '.' && currentTextEl.innerText.includes('.')) return
    currentTextEl.innerText += number
}

function chooseOperation(operator){
    if(currentTextEl.innerText ==='') return
    if(prevTextEl.innerText !== ''){
        compute()
    }
    // currentTextEl.innerText += operator
    prevTextEl.innerText = currentTextEl.innerText
    currentTextEl.innerText = ''
}

function clear(){
    currentTextEl.innerText = ''
    prevTextEl.innerText = ''
}

function backspace(){
    currentTextEl.innerText = currentTextEl.innerText.toString().slice(0,-1)
}

function compute(){
   let computation
   let prev = +prevTextEl.innerText
   let current = +currentTextEl.innerText
   if(isNaN(prev) || isNaN(current)) return
    switch (operator) {
        case '+':
            computation = prev + current
            break;
         case '-':
             computation = prev - current
             break;
         case '/':
            computation = prev / current
            break;
         case '*':
            computation = prev + current
            break;
         case '%':
            computation = prev / 100
            break;
        default:
            return
       }

   
    currentTextEl.innerText = computation
    prevTextEl.innerText = ''

}












