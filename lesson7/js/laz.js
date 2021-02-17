//find all images with data-src and replace attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//loop through and load images
imagesToLoad.forEach((img) => {
    loadImages(img);
  });