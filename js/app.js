'use strict'

const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#display');

function calc() {
    const btnValue = this.innerText;
    switch (btnValue) {
        case 'C':
            result.value = '';
            break;
        case '=':
            result.value = eval(result.value)
            break
        default:
            result.value += btnValue;
            break;
    }
}

btns.forEach(elemnt => {
    elemnt.addEventListener('click', calc)
})