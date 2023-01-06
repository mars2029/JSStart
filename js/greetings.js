const submitForm = document.querySelector('#submitform');
const username = document.querySelector('input[name=username]');
const greetingText = document.querySelector('#greetingText');

function onLoginSubmit(e) {
  e.preventDefault();
  submitForm.classList.add('hidden');
  greetingText.innerText = `Hello ${username.value}`;
  greetingText.classList.remove('hidden');
  localStorage.setItem('username', username.value);
}

submitForm.addEventListener('submit', onLoginSubmit);

if (localStorage.getItem('username') === null) {
  submitForm.classList.remove('hidden');
  greetingText.classList.add('hidden');
} else {
  submitForm.classList.add('hidden');
  greetingText.classList.remove('hidden');

  const localtime = new Date();
  if (localtime.getHours < 12) {
    greetingText.innerHTML = `Good morning ${localStorage.getItem('username')}`;
  } else if (localtime.getHours < 18) {
    greetingText.innerHTML = `Food afternoon ${localStorage.getItem(
      'username'
    )}`;
  } else {
    greetingText.innerHTML = `Good Evening ${localStorage.getItem('username')}`;
  }
}
