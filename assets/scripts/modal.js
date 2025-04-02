(function () {
  const openBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("communityModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modalTitle");
  const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  
  let firstFocusableElement = focusableElements[0];
  let lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (!openBtn || !modal || !closeBtn || !modalTitle) return;

  // Ensure modal is closed by default
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  openBtn.setAttribute("aria-expanded", "false");

  function openModal() {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    modalTitle.setAttribute("tabindex", "-1");
    modalTitle.focus();
    
    // Disable background content
    document.querySelectorAll("main, header, footer").forEach(el => el.setAttribute("aria-hidden", "true"));
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.focus();
    
    // Enable background content
    document.querySelectorAll("main, header, footer").forEach(el => el.removeAttribute("aria-hidden"));
  }

  // Open modal on button click
  openBtn.addEventListener("click", openModal);

  // Close modal on button click
  closeBtn.addEventListener("click", closeModal);

  // Trap focus inside the modal
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) { // Shift + Tab (Backward navigation)
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else { // Tab (Forward navigation)
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }

    // Close modal on Escape key
    if (e.key === "Escape") {
      closeModal();
    }
  });
})();
