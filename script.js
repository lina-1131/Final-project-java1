// Function to add the tabindex attribute to all figures for keyboard accessibility
function setupGallery() {
    // REQUIRED: Add a console.log message to make sure that your event triggers
    console.log("Gallery Setup Function Triggered: Adding tabindex attributes for keyboard access.");
    
    // Select all the figure elements in the gallery
    const figures = document.querySelectorAll('#gallery figure');

    // REQUIRED: Write a for loop to loop through each image (figure)
    for (let i = 0; i < figures.length; i++) {
        // REQUIRED: Add the tabindex="0" attribute
        figures[i].setAttribute('tabindex', '0');
        console.log(`Tabindex added to: ${figures[i].id}`);
    }
}

// Function to apply the visual highlight effect
function applyHighlight(element) {
    element.classList.add('highlight');
}

// Function to remove the visual highlight effect
function removeHighlight(element) {
    element.classList.remove('highlight');
}

// REQUIRED: Listener for onfocus Event (uses the same pattern as onmouseover)
function handleFocus(element) {
    applyHighlight(element);
    console.log(`Element focused (keyboard access): ${element.id}`);
}

// REQUIRED: Listener for onblur Event (uses the same pattern as onmouseleave)
function handleBlur(element) {
    removeHighlight(element);
    console.log(`Element blurred (keyboard access): ${element.id}`);
}

// The setupGallery function is called automatically via the 'onload' attribute in the <body> tag.