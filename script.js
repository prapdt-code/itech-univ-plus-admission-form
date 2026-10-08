const form = document.querySelector('#admission-form');
const applicationDate = document.querySelector('#application-date');
const message = document.querySelector('#form-message');

// Use the visitor's local date as the starting application date.
function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

applicationDate.value = getLocalDate();

// The browser checks required fields and email format before this event runs.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.classList.remove('error');
  message.textContent = 'Your details look complete. This sample form is ready to connect to an admissions office.';
});

// Keep the feedback in sync when the student clears the form.
form.addEventListener('reset', () => {
  window.setTimeout(() => {
    applicationDate.value = getLocalDate();
    message.textContent = '';
    message.classList.remove('error');
  }, 0);
});
