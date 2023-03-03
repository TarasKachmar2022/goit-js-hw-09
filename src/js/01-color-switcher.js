const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const DISABLED = 'disabled';
let intervalId = null;
let activeStatusBtn = refs.stopBtn.hasAttribute(DISABLED);

if(!activeStatusBtn){
    onStopBtnAttribute();
}

function onStartBtnClick(){
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    refs.stopBtn.removeAttribute(DISABLED);
    refs.startBtn.setAttribute(DISABLED, '');
}

function onStopBtnClick(){
    clearInterval(intervalId);

    refs.startBtn.removeAttribute(DISABLED);
    onStopBtnAttribute();
}

function onStopBtnAttribute(){
    refs.stopBtn.setAttribute(DISABLED, '');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }