const constantText = `Type shouldn't you be leaving around `;

const timeInput = document.getElementById('time-input');
const timeForm = document.getElementById('time-form');
const result = document.getElementById('result');

timeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderResult();
});


function renderResult() {
    const li = document.createElement('li');
    li.textContent = constantText + timeInput.value;
    result.append(li);
    timeInput.value = '';
}

// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
// const save = message = {}
// const copy = message => {}
// const history = message => { }
