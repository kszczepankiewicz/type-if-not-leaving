const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const form = document.getElementById('form');
const result = document.getElementById('result');

const timeInputDigits = document.getElementById('time-input-digits');
const timeInputWords = document.getElementById('time-input-words');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmptiness(timeInputDigits.value);
    renderResult(constantText, timeInputWords.value, timeInputDigits.value);
});


function renderResult(text, timeWords, timeDigits) {
    debugger
    result.append(createResultElement(text, timeDigits, timeWords));
    // timeInput.value = '';
}

const createResultElement = (text, timeDigits, timeWords) => {
    const li = document.createElement('li');
    li.append(text, createSpan(timeDigits), ' ', createSpan(timeWords));
    return li;
}


function createSpan(time) {
    const span = document.createElement('span');
    span.textContent = time;
    return span;
}
const validateEmptiness = input => {
    if (!input) alert('Empty');
}
// const copy = message => {}
// const save = message = {}
// const distinctHistory = () => {}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
