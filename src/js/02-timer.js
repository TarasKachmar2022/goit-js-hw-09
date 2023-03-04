import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  startTime: null,
  onClose(selectedDates) {
    const selectTime = selectedDates[0] - options.defaultDate;
    if(selectTime < 0){
      // alert("Please choose a date in the future");
      Notiflix.Notify.failure("Please choose a date in the future");
      addDisabledAttribute();
      return;
    }
    refs.startBtnEl.removeAttribute('disabled');
    options.startTime = selectedDates[0].getTime();
  }
};

flatpickr("#datetime-picker", options);

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]')
}

refs.startBtnEl.addEventListener('click', onStartBtnClick.bind(options));
addDisabledAttribute();

function inputBlock(){
  refs.inputEl.disabled = true;
}

function addDisabledAttribute(){
  refs.startBtnEl.setAttribute('disabled', '');
}

function onStartBtnClick(){
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const ms = this.startTime - currentTime;
    const time = convertMs(ms);
    const withZero = addLeadingZero(time);
    renderStopWatch(withZero);
    if(time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0){
      clearInterval(intervalId)
    }
  }, 1000);
  inputBlock();
  addDisabledAttribute();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  // console.log({days, hours, minutes, seconds})
  return { days, hours, minutes, seconds };
}

function addLeadingZero(time){
const days = time.days.toString().padStart(2, 0);
const hours = time.hours.toString().padStart(2, 0);
const minutes = time.minutes.toString().padStart(2, 0);
const seconds = time.seconds.toString().padStart(2, 0);
return {days, hours, minutes, seconds};
}

function renderStopWatch({days, hours, minutes, seconds}){
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}