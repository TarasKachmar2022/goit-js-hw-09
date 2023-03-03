import Notiflix from 'notiflix';

const fromEl = document.querySelector('.form');

fromEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();

  const delayVal = Number(event.target.elements.delay.value);
  const stepVal = Number(event.target.elements.step.value);
  const amountVal = Number(event.target.elements.amount.value);

  let delay = delayVal - stepVal;

  for(let i = 1; i <= amountVal; i += 1){
    delay += stepVal;
    const prom = createPromise(i, delay);
    prom.then(fulfill).catch(reject);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      }
        reject({position, delay});
    }, delay);
  })
  return promise;
}

function fulfill({position, delay}){
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`,
    {
      clickToClose: true,
      pauseOnHover: true,
      useIcon: false,
    },
  );
  // Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function reject({position, delay}){
  Notiflix.Notify.success(
    `❌ Fulfilled promise ${position} in ${delay}ms`,
    {
      clickToClose: true,
      pauseOnHover: true,
      useIcon: false,
    },
  );
  // Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}



// Варіант 2

// import Notiflix from 'notiflix';

// const fromEl = document.querySelector('.form');

// fromEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event){
//   event.preventDefault();

//   const delayVal = Number(event.target.elements.delay.value);
//   const stepVal = Number(event.target.elements.step.value);
//   const amountVal = Number(event.target.elements.amount.value);

//   let delay = delayVal - stepVal;

//   for(let i = 1; i <= amountVal; i += 1){
//     delay += stepVal;
//     createPromise(i, delay);
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(() => {
//   if (shouldResolve) {
//       fulfill({position, delay});
//   } else {
//       reject({position, delay});
//     }
//   }, delay);
// }

// function fulfill({position, delay}){
//   Notiflix.Notify.success(
//     `✅ Fulfilled promise ${position} in ${delay}ms`,
//     {
//       clickToClose: true,
//       pauseOnHover: true,
//       useIcon: false,
//     },
//   );
//   // Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
// }

// function reject({position, delay}){
//   Notiflix.Notify.success(
//     `❌ Fulfilled promise ${position} in ${delay}ms`,
//     {
//       clickToClose: true,
//       pauseOnHover: true,
//       useIcon: false,
//     },
//   );
//   // Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
// }