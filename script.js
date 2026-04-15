const timeInput = document.getElementById('time-input');
const timeForm = document.getElementById('time-form');
const result = document.getElementById('result');

timeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = timeInput.value;
    timeInput.value = '';
});

// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
// const save = message = {}
// const copy = message => {}
// const history = message => { }
