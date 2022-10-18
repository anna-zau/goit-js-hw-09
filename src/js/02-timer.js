import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  timerEl: document.querySelector('.timer'),
  daysSpanEl: document.querySelector('span[data-days]'),
  hoursSpanEL: document.querySelector('span[data-hours]'),
  minutesSpanEl: document.querySelector('span[data-minutes]'),
  secondsSpanEl: document.querySelector('span[data-seconds]'),
};

let selectedDate = null;
let intervalId = null;

refs.startBtn.addEventListener('click', onBtnStartClick);

// Значение, возвращённое методом getTime(), является количеством миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);
    const dateToday = new Date();
    if (selectedDates[0] < dateToday) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
  },
});

let object = {};

function onBtnStartClick() {
  intervalId = setInterval(() => {
    const timeSubtractionDifference = selectedDate - new Date().getTime();
    if (timeSubtractionDifference <= 0) {
      clearInterval(intervalId);
      return;
    }
    object = convertMs(timeSubtractionDifference);
    changeContent(addLeadingZero(object));
  }, 1000);
}

function addLeadingZero(value) {
  const newValues = { ...value };
  const keys = Object.keys(newValues);
  for (const key of keys) {
    newValues[key] = String(newValues[key]).padStart(2, 0);
  }
  return newValues;
}

function changeContent({ days, hours, minutes, seconds }) {
  refs.daysSpanEl.textContent = days;
  refs.hoursSpanEL.textContent = hours;
  refs.minutesSpanEl.textContent = minutes;
  refs.secondsSpanEl.textContent = seconds;
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

  return { days, hours, minutes, seconds };
}
