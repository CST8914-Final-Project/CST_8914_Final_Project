document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle switch image and accessibility attributes
    function toggleSwitch() {
        var switchElement = document.getElementById("switch");
        var imageTag = document.getElementById("switchToggle");
        var isChecked = switchElement.getAttribute("aria-checked") === "true";

        if (isChecked) {
            imageTag.src = "/assets/images/toggle_switch_off.jpg";
            imageTag.alt = "Toggle switch, off";
            switchElement.setAttribute("aria-checked", "false");
        } else {
            imageTag.src = "/assets/images/toggle_switch_on.jpg";
            imageTag.alt = "Toggle switch, on";
            switchElement.setAttribute("aria-checked", "true");
        }
    }

    // Function to handle keyboard interaction with the switch
    document.getElementById("switch").addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleSwitch();
        }
    });

    // Function to validate the form (Only Email is required)
    function validateForm(event) {
        event.preventDefault();
        var emailInput = document.getElementById("email");
        var emailValue = emailInput.value.trim();
        var errorMessage = "";

        if (emailValue === "") {
            errorMessage = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            errorMessage = "Please enter a valid email address.";
        }

        var existingError = document.getElementById("email-error");
        if (existingError) existingError.remove();

        if (errorMessage) {
            var errorSpan = document.createElement("span");
            errorSpan.id = "email-error";
            errorSpan.style.color = "#cd2c2c";
            errorSpan.style.fontSize = "0.9rem";
            errorSpan.textContent = errorMessage;
            emailInput.insertAdjacentElement("afterend", errorSpan);
            return false;
        }

        alert("Thank you! We will get back to you soon.");
        return true;
    }

    // Show/hide event details based on checkbox selection
    var eventDetails = document.getElementById("eventDetails");
    document.querySelectorAll("input[name='topics']").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var anyChecked = Array.from(document.querySelectorAll("input[name='topics']")).some(input => input.checked);
            eventDetails.style.display = anyChecked ? "block" : "none";
        });
    });

    // Attach event listeners
    document.getElementById("switch").addEventListener("click", toggleSwitch);
    document.querySelector("button.btn.primary").addEventListener("click", validateForm);
});
