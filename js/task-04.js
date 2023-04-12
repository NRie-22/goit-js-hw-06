const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById('value');

let counterValue = 0;

btnDec.addEventListener('click', decrementCounetr);
btnInc.addEventListener('click', incrementCounetr);

function decrementCounetr() { 
    counterValue -= 1;
    counter.textContent = counterValue;
};

function incrementCounetr() { 
    counterValue += 1;
    counter.textContent = counterValue;
};