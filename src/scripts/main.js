'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.textContent = 'Promise was resolved!';
  document.body.append(successMessage);
});

promise2
  .then(() => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';
    document.body.append(successMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });
