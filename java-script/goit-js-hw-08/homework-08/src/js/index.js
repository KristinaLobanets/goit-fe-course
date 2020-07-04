import gallery from "./gallery-items.js";

// console.log(gallery);

const galleryJs = document.querySelector(".js-gallery");
const image = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".js-lightbox");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const closeDiv = document.querySelector(".lightbox__overlay");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(closeDiv);

const markUP = (item) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href= ${item.original}
  >
    <img
      class="gallery__image"
      src= ${item.preview}
      data-source= ${item.original}
      alt= ${item.description}
    />
  </a>
</li>`;
};

const allGallery = gallery.reduce((acc, obj) => acc + markUP(obj), "");

galleryJs.innerHTML = allGallery;

const openModal = (event) => {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  image.src = event.target.dataset.source;
  image.alt = event.target.alt;
  lightbox.classList.add("is-open");
};
galleryJs.addEventListener("click", openModal);

const closeModal = (event) => {
  lightbox.classList.remove("is-open");
  image.src = "";
  image.alt = "";
};

// closeDiv.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);

const prevFunk = (event) => {
  const result = gallery.find((item) => item.original === image.src);
  let index = gallery.indexOf(result) - 1;
  if (index < 0) {
    index = gallery.length - 1;
  }
  image.src = gallery[index].original;
  image.alt = gallery[index].description;
};

prev.addEventListener("click", prevFunk);

const nextFunk = (event) => {
  const result = gallery.find((item) => item.original === image.src);
  let index = gallery.indexOf(result) + 1;
  if (index > gallery.length - 1) {
    index = 0;
  }
  image.src = gallery[index].original;
  image.alt = gallery[index].description;
};

next.addEventListener("click", nextFunk);
