const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');
const counter = document.querySelector('#counter');
const buttonContainer = document.querySelector('#button-container');

buttonContainer.addEventListener('click', (event) => {
    
    console.log(event.target.className)
});

decreaseButton.addEventListener('click', () => {

    let currentNumber = parseInt(counter.textContent);
    if (currentNumber < 1) {
        counter.style.color = "red";
    }
    else if (currentNumber == 0) {
    
        counter.style.color = "cyan";
    }

    counter.textContent = currentNumber - 1;
});


resetButton.addEventListener('click', () => {

    counter.textContent = 0;
    counter.style.color = "cyan";
});


increaseButton.addEventListener('click', () => {

    let currentNumber = parseInt(counter.innerText);
    counter.textContent = currentNumber + 1;
    currentNumber = parseInt(counter.textContent);

    if (currentNumber > 0) {
        counter.style.color = "green";
    }
    else if (currentNumber === 0) {
        counter.style.color = "cyan"
    }
});

