const countElement = document.getElementById('counterNumber');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 1;

incrementBtn.addEventListener('click', () => {
    count++;
    countElement.innerText = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    countElement.innerText = count;
});