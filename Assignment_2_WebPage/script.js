// script.js

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}
// Function to change the image source
function changeImage() {
    const smallImage = document.getElementById('small-image');
    const currentSrc = smallImage.src;

    // Assuming the image paths are correct and accessible
    if (currentSrc.includes('C:/Users/DELL/Desktop/image2.jpg')) {
        smallImage.src = 'C:/Users/DELL/Desktop/image1.jpg';
    } else {
        smallImage.src = 'C:/Users/DELL/Desktop/image2.jpg';
    }
}
