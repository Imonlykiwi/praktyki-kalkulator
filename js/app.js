'use strict'

const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#display');

function calc() {
    const btnValue = this.innerText;
    if(btnValue === 'C') {
        result.value = '';
    } else if (btnValue === '=') {
        result.value = eval(result.value)
    } else {
        result.value += btnValue;
    }

}

btns.forEach(elemnt => {
    elemnt.addEventListener('click', calc)
})