// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log("Hello");
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Доступ до пустої галереї в html
const galleryList = document.querySelector('.gallery');
console.log(galleryList);

// Функція, яка повертає рядок із всіма картинками 
// description, original,  preview - структура однієї картинки з галереї

function galleryMarcupItem(items) {
    return items
    .map(({description, original, preview}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    })
   .join('');
}

// Створюємо всі картки функцією galleryMarcupItem
const galleryMarcup = galleryMarcupItem(galleryItems);

// Додаємо в DOM всі картки
galleryList.innerHTML = galleryMarcup;

// Слухач події з функцією гортання картинки вправо-вліво і виведення підпису із alt знизу картинки, із затримкою 250 мілісекунд
const gallery = new SimpleLightbox('.gallery a', { captions: true, captionType: 'attr', captionsData: 'alt', captionDelay: 250, });
