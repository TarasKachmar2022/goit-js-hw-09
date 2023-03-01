const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;
let activeStatusBtn = refs.stopBtn.hasAttribute('disabled');

if(!activeStatusBtn){
    onStopBtnAttribute();
}

function onStartBtnClick(){
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    refs.stopBtn.removeAttribute('disabled');
    refs.startBtn.setAttribute('disabled', '');
}

function onStopBtnClick(){
    clearInterval(intervalId);

    refs.startBtn.removeAttribute('disabled');
    onStopBtnAttribute();
}

function onStopBtnAttribute(){
    refs.stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }