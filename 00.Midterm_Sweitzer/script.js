// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select all text boxes
  const textBoxes = document.querySelectorAll('.text-box');

  // Function to change the background image when a text box is in view
  const changeBackgroundImage = () => {
    let scrollPosition = window.scrollY; // Get current scroll position

    // Loop through each text box to check if it's in view
    textBoxes.forEach((box) => {
      const boxTop = box.offsetTop;
      const boxHeight = box.offsetHeight;

      // Check if the box is within the visible viewport
      if (scrollPosition >= boxTop && scrollPosition < (boxTop + boxHeight)) {
        const bgImage = box.getAttribute('data-bg'); // Get the background image from data-bg

        // Apply the background image to the body
        document.body.style.backgroundImage = `url('images/${bgImage}')`;
      }
    });
  };

  // Listen to the scroll event to trigger background change
  window.addEventListener('scroll', changeBackgroundImage);

  // Trigger once on load in case the first image isn't applied
  changeBackgroundImage();
});
