const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const timeInput = document.getElementById('time-input');
const timeForm = document.getElementById('time-form');
const result = document.getElementById('result');

timeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderResult(constantText, timeInput.value);
});


function renderResult(text, time) {
    const span = document.createElement('span');
    span.textContent = time;
    const li = document.createElement('li');
    li.textContent = text;
    li.append(span);
    result.append(li);
    // timeInput.value = '';
}

// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
// const save = message = {}
// const copy = message => {}
// const history = message => { }
