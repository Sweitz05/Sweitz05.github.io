// Image sources
const images = [
    'images/BFB1.jpg',
    'images/BFB2.jpg',
    'images/BFB3.jpg'
];

// Current image index
let currentIndex = 0;

// Function to update the background image
function updateBackgroundImage() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial background image
updateBackgroundImage();

// Change background image on click
document.body.addEventListener('click', updateBackgroundImage);
