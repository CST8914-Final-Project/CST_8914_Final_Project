// Template Function (currently empty)
function knowledgeRunner() {}

// Function to toggle the image source
function toggleChange() {
    var imageTag = document.getElementById('switchToggle');
    var currentSrc = imageTag.src.split('/').pop(); // Extract only the filename

    if (currentSrc === "toggle_switch_off.jpg") {
        imageTag.src = "/assets/images/toggle_switch_on.jpg"; // Update to ON
    } else {
        imageTag.src = "/assets/images/toggle_switch_off.jpg"; // Update to OFF
    }
}

// Initialize (if needed)
knowledgeRunner();
