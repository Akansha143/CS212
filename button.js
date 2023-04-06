// Get the img element and button element
const myImage = document.getElementById('myImage');
const changeImageBtn = document.getElementById('changeImageBtn');

// Define an array of image sources
const imageSources = [
  'https://github.com/Akansha143/CS212/blob/main/lawrence%20roberts.jpeg?raw=true.jpg',
  'https://github.com/Akansha143/CS212/blob/main/robert%20metcalfe.jpg?raw=true',
];

// Define a variable to keep track of the current image index
let currentImageIndex = 0;

// Add a click event listener to the button
changeImageBtn.addEventListener('click', () => {
  // Get the next image source
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  const nextImageSource = imageSources[currentImageIndex];

  // Update the img element's src attribute
  myImage.src = nextImageSource;
});




/* <button type="button"
onclick="document.getElementById('demo).innerHTML = Date()">
    Click me to display Date and Time
</button>

<p id="demo"></p>
<button type = "button"
onclick="document.getElementById('thelawrence').src= 'https://github.com/Akansha143/CS212/blob/main/vint%20cerf.jpg?raw=true';document.getElementById('thevint').src = 'https://github.com/Akansha143/CS212/blob/main/vint%20cerf.jpg?raw=true' ">

I like vint.</button>

<button type="button"

onclick="document.getElementById('thelawrence').src = 'https://github.com/Akansha143/CS212/blob/main/lawrence%20roberts.jpeg?raw=true'; document.getElementById('thevint').src = 'https://github.com/Akansha143/CS212/blob/main/lawrence%20roberts.jpeg?raw=true">

I like lawrence.</button> */

//</body> </html>