// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');
const galleryItemsEL = makeGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEL);

function makeGalleryItem(array) {
  return array
    .map(el => {
      return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a> `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  disableScroll: true,
  captionsData: 'alt',
  captionDelay: 250,
});
