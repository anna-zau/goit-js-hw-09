refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

// повесили слушатели на кнопки

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

let inervalId = null;

//  коллбек функция для клика по СТАРТ
function onStartClick() {
  inervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.startBtn.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');
}

// коллбек функция для клика по СТОП

function onStopClick() {
  clearInterval(inervalId);

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', '');
}

// смена цвета  - рандом

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
