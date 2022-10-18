import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const startBtn = document.querySelector('button[type="submit"]');

const onFulfill = success => {
  Notiflix.Notify.success(`✅ ${success}`);
};

const onReject = reject => {
  Notiflix.Notify.failure(`❌ ${reject}`);
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const amount = evt.currentTarget.elements.amount.value;

  const step = parseInt(evt.currentTarget.elements.step.value);

  let delay = parseInt(evt.currentTarget.elements.delay.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    setTimeout(() => {
      promises.push(createPromise(i, delay).then(onFulfill).catch(onReject));
      delay += step;
    }, delay);

    formEl.reset();
  }

  Promise.all(promises);
}

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay} ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay} ms`);
      }
    }, delay);
  });
};
