const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const timeInput = document.getElementById('time-input');
const timeForm = document.getElementById('time-form');
const result = document.getElementById('result');
const timeInputDigits = document.getElementById('time-input-digits');

timeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderResult(constantText, timeInput.value, timeInputDigits.value);
});


function renderResult(text, time, timeDigits) {
    const li = document.createElement('li');
    li.append(text, createSpan(timeDigits), ' ', createSpan(time));
    result.append(li);
    // timeInput.value = '';
}


function createSpan(time) {
    const span = document.createElement('span');
    span.textContent = time;
    return span;
}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
// const save = message = {}
// const copy = message => {}
// const history = message => { }
