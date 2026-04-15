const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const form = document.getElementById('form');
const result = document.getElementById('result');

const timeInputDigits = document.getElementById('time-input-digits');
const timeInputWords = document.getElementById('time-input-words');

function renderResult(text, timeWordsStr, timeDigitsStr) {
    const li = createResultElement(text, timeWordsStr, timeDigitsStr);
    result.append(li);
    timeInputWords.value = '';  //fix when not present
    return li.textContent;
}
const createResultElement = (text, timeWordsStr, timeDigitsStr) => {
    const li = document.createElement('li');
    li.append(text, createSpan((timeWordsStr ? timeWordsStr + ' or ' : '') + timeDigitsStr));
    return li;
}
function createSpan(time) {
    const span = document.createElement('span');
    span.textContent = time;
    return span;
}
const validateEmptiness = input => {
    if (!input) alert('Empty');
    return input
}
const copy = async message => {
    try {
        await navigator.clipboard.writeText(message);
    } catch (error) {
        alert('Not copied')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmptiness(timeInputDigits.value)) return;
    timeInputDigits.blur();
    copy(renderResult(constantText, timeInputWords.value, timeInputDigits.value));
});

// const createMessage = (text, timeInputWordsStr, timeInputDigitsStr) => { }
// const save = message = {}
// const distinctHistory = () => {}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
