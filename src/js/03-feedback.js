// обмеження кількості викликів функції у заданому інтервалі часу.
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// об'єкт data містить email та message і зберігає цей об'єкт в локальному сховищі під ключем STORAGE_KEY.
const saveData = () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// зчитує об'єкт data і заповнює поля email та message значеннями, якщо поля були заповнені
const updateFormData = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  emailInput.value = data.email || '';
  messageInput.value = data.message || '';
};

// перевіряє на зміст форми, видаляє дані з локального сховища і очищає поля форми після відправки
const submitForm = event => {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
};

emailInput.addEventListener('input', throttle(saveData, 500));
messageInput.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', submitForm);

// відновлення форми, якщо вона була заповнена
updateFormData();