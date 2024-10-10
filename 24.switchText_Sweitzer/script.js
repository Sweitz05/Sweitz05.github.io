// Array with 5 different sentences
const sentences = [
    "The train in the fireplace.",
    "In the hallway of my elementary school.",
    "Took its picture at the Art Institute of Chicago",
    "As useful as a painting of a clock.",
    "Time flies."
];

// Function to change the text on the screen
let index = 0;

function changeText() {
    // Get the text element
    const textElement = document.getElementById("displayText");

    // Update the text content
    textElement.textContent = sentences[index];

    // Move to the next sentence, looping back if necessary
    index = (index + 1) % sentences.length;
}
