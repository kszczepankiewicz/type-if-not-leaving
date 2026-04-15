const constantText = `Please type shouldn't you be leaving for Korzeniowskiego st. around `;

const form = document.getElementById('form');
const result = document.getElementById('result');

const timeInputDigits = document.getElementById('time-input-digits');
const timeInputWords = document.getElementById('time-input-words');

const clearLocalStorageBtn = document.getElementById('clear-localstorage-btn');

function addMessage(text, timeWordsStr, timeDigitsStr) {
    const li = createResultElement(text, timeWordsStr, timeDigitsStr);
    setMessages(li);
    renderResult();
}
const createResultElement = (text, timeWordsStr, timeDigitsStr) => {
    const li = document.createElement('li');
    li.append(text, createSpan(formatTime(timeWordsStr, timeDigitsStr)));
    return li;
}
const renderResult = () => result.innerHTML = getMessages().reverse().join('\n');
const formatTime = (timeWordsStr, timeDigitsStr) => (timeWordsStr ? timeWordsStr.toLowerCase() + ' or ' : '') + timeDigitsStr;
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
const setMessages = messageEl => {
    let messages = [];
    if (messageEl) {
        messages = getMessages();
        messages.push(messageEl.outerHTML);
    }
    localStorage.setItem('messages', JSON.stringify(messages));
    result.innerHTML = '';
}
function getMessages() {
    const raw = localStorage.getItem('messages');
    if (!raw) return [];
    let messages;
    try {
        messages = JSON.parse(raw);
    } catch (error) {
        return [];
    }
    if (!Array.isArray(messages)) return [];
    return messages;
}

renderResult();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmptiness(timeInputDigits.value)) return;
    timeInputDigits.blur();
    const timeWordStr = timeInputWords.value;
    const timeDigitsStr = timeInputDigits.value;
    addMessage(constantText, timeWordStr, timeDigitsStr);
    copy(addBoldMarkdown(timeWordStr, timeDigitsStr));
});
clearLocalStorageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!window.confirm('Are you sure to clear the history?')) return;
    setMessages();
})

// const distinctHistory = () => {}
// const deleteFromHistory = () => {}
// const chooseFromHistory = () => { }
