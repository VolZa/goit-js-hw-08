import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

let creatGalleryPreview = ""; 

// Collecting gallery elements
galleryItems.forEach(item => {
    creatGalleryPreview +=
    (`<a class="gallery__link" href="${item.original}">
            <img class="gallery__image"  src="${item.preview}"  alt="" title = "${item.description}"  />
    </a>`)
});

// Add code to DOM here
galleryEl.insertAdjacentHTML('beforeend', creatGalleryPreview);

const aGalleryItemEl = document.querySelectorAll('.gallery__link');

//Cancel default behavior on click
galleryEl.addEventListener("click", event => event.preventDefault());

new SimpleLightbox('.gallery a', {captionDelay: 250,});
console.log(galleryItems);
