const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const form = document.getElementById('form');
const result = document.getElementById('result');

const timeInputDigits = document.getElementById('time-input-digits');
const timeInputWords = document.getElementById('time-input-words');

function renderResult(text, timeWordsStr, timeDigitsStr) {
    const li = createResultElement(text, timeWordsStr, timeDigitsStr);
    result.append(li);
}
const createResultElement = (text, timeWordsStr, timeDigitsStr) => {
    const li = document.createElement('li');
    li.append(text, createSpan(formatTime(timeWordsStr, timeDigitsStr)));
    return li;
}
function formatTime(timeWordsStr, timeDigitsStr) {
    return (timeWordsStr ? timeWordsStr + ' or ' : '') + timeDigitsStr;
}
function createSpan(text) {
    const span = document.createElement('span');
    span.textContent = text;
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
const addBoldMarkdown = (timeWordStr, timeDigitsStr) => `${constantText}*${formatTime(timeWordStr, timeDigitsStr)}*`;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmptiness(timeInputDigits.value)) return;
    timeInputDigits.blur();
    const timeWordStr = timeInputWords.value;
    const timeDigitsStr = timeInputDigits.value;
    renderResult(constantText, timeWordStr, timeDigitsStr);
    copy(addBoldMarkdown(timeWordStr, timeDigitsStr));
});

// const save = message = {}
// const distinctHistory = () => {}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
