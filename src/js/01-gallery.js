import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const liItems = galleryItems.map(item => {
    const li = `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
        <img class="gallery__image" src="${item.preview}" alt="${item.description}">
</a>
</li>`;
    return li;
}).join('');

galleryContainer.insertAdjacentHTML("beforeend", liItems);

    let lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250
    });
