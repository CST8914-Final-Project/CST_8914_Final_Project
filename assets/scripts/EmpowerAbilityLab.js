// Function to toggle the switch state and image
function toggleChange() {
    const switchElement = document.getElementById('switch');
    const imageTag = document.getElementById('switchToggle');
    const isChecked = switchElement.getAttribute('aria-checked') === 'true';
  
    if (isChecked) {
      // Switch is ON, turn it OFF
      switchElement.setAttribute('aria-checked', 'false');
      imageTag.src = "/assets/images/toggle_switch_off.jpg";
      imageTag.alt = "Toggle switch, off";
    } else {
      // Switch is OFF, turn it ON
      switchElement.setAttribute('aria-checked', 'true');
      imageTag.src = "/assets/images/toggle_switch_on.jpg";
      imageTag.alt = "Toggle switch, on";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const switchElement = document.getElementById("switch");
  
    // Add event listener for click to toggle
    switchElement.addEventListener("click", toggleChange);
  
    // Add event listener for keyboard toggle (Enter and Spacebar)
    switchElement.addEventListener("keydown", function (event) {
      // Only trigger on Enter or Space
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Prevent page scroll when Spacebar is pressed
        toggleChange();
      }
    });
  
    // Ensure the switch element is focusable with the keyboard
    switchElement.setAttribute('tabindex', '0');
  });
  