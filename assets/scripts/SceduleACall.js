document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle switch image and accessibility attributes
  function toggleChange() {
    const switchElement = document.getElementById('switch');
    const imageTag = document.getElementById('switchToggle');
    const isChecked = switchElement.getAttribute('aria-checked') === 'true';
  
    if (isChecked) {
      // Switch is ON, turn it OFF
      switchElement.setAttribute('aria-checked', 'false');
      imageTag.src = "assets/images/toggle_switch_off.jpg";
      imageTag.alt = "Toggle switch, off";
    } else {
      // Switch is OFF, turn it ON
      switchElement.setAttribute('aria-checked', 'true');
      imageTag.src = "assets/images/toggle_switch_on.jpg";
      imageTag.alt = "Toggle switch, on";
    }
  }

  // Function to handle keyboard interaction with the switch
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

  // Function to validate the form (Only Email is required)
  function validateForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const errorParagraph = document.getElementById("email-error");
    let errorMessage = "";

    // Clear previous error
    emailInput.setAttribute("aria-invalid", "false");
    errorParagraph.textContent = "";

    // Validation logic
    if (emailValue === "") {
      errorMessage = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      errorMessage = "Please enter a valid email address.";
    }

    // If there is an error
    if (errorMessage) {
      emailInput.setAttribute("aria-invalid", "true");
      emailInput.focus();
      errorParagraph.textContent = errorMessage;
      return false;
    }

    // No error: Show thank you message and clear form
    alert("Thank you! We will get back to you soon.");

    const form = event.target.closest("form");
    form.reset();

    // Reset toggle switch image
    const switchToggle = document.getElementById("switchToggle");
    if (switchToggle) {
      switchToggle.src = "assets/images/toggle_switch_off.jpg";
    }

    // Clear error message
    errorParagraph.textContent = "";
    eventDetails.style.display = "none";
    // Optionally show a thank you div instead
    const thankYouMessage = document.getElementById("thankYouMessage");
    if (thankYouMessage) {
      thankYouMessage.classList.remove("hidden");
      thankYouMessage.setAttribute("tabindex", "-1");
      thankYouMessage.focus();
    }

    return true;
  }

  // Attach event listener to form submit
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  // Show/hide event details based on checkbox selection
  
  var speakerCheckbox = document.getElementById("speaker");
  var eventDetails = document.getElementById("eventDetails");

  speakerCheckbox.addEventListener("change", function () {
    if (speakerCheckbox.checked) {
      eventDetails.classList.remove("hidden");
      eventDetails.setAttribute("aria-hidden", "false");
    } else {
      eventDetails.classList.add("hidden");
      eventDetails.setAttribute("aria-hidden", "true");
    }
  });
  // Attach event listeners
  document.getElementById("switch").addEventListener("click", toggleSwitch);
document
  .querySelector("button.btn.primary")
  .addEventListener("click", validateForm);
});
