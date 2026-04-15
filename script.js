const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const form = document.getElementById('form');
const result = document.getElementById('result');

const timeInputDigits = document.getElementById('time-input-digits');
const timeInputWords = document.getElementById('time-input-words');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmptiness(timeInputDigits.value);
    timeInputDigits.blur();
    copy(renderResult(constantText, timeInputWords.value, timeInputDigits.value));
});

function renderResult(text, timeWordsStr, timeDigitsStr) {
    const li = createResultElement(text, timeDigitsStr, timeWordsStr);
    result.append(li);
    timeInputWords.value = '';
    return li.textContent;
}
const createResultElement = (text, timeDigitsStr, timeWordsStr) => {
    const li = document.createElement('li');
    li.append(text, createSpan(timeWordsStr ? timeWordsStr + ' or ' : ''), createSpan(timeDigitsStr));
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
const copy = async message => {
    try {
        await navigator.clipboard.writeText(message);
    } catch (error) {
        alert('Not copied')
    }
}
// const save = message = {}
// const distinctHistory = () => {}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
