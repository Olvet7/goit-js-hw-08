import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
// Задаємо час затримки для функції throttle
const THROTTLE_DELAY = 1000;

// змінна для зберігання часу відтворення
const storageKey = 'videoplayer-current-time';

// Прослуховуємо подію в плеєрі, прикріпивши зворотний виклик за допомогою .on() + throttle із функцією оновлення в Local Storage 
player.on('timeupdate', throttle(onPlayerTimeChange, THROTTLE_DELAY));

// Визначаємо функцію onPlayerTimeChange, яка викликається при кожному оновленні часу відтворення
function onPlayerTimeChange(event) {
  const time = Math.floor(event.seconds); // заокруглюємо кількість секунд
  localStorage.setItem(storageKey, time); // записуємо у Local Storage
}

const pausedTime = localStorage.getItem(storageKey);

if (pausedTime) {
  player.setCurrentTime(pausedTime || 0);
}
