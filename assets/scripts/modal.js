(function () {
    const openBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("communityModal");
    const closeBtn = document.getElementById("closeModalBtn");
    const modalTitle = document.getElementById("modalTitle");
  
    if (!openBtn || !modal || !closeBtn || !modalTitle) return;
  
    // Ensure modal is closed by default
    modal.classList.add("hidden");
    openBtn.setAttribute("aria-expanded", "false");
  
    function openModal() {
      modal.classList.remove("hidden");
      openBtn.setAttribute("aria-expanded", "true");
      modalTitle.focus(); // Focus on heading
    }
  
    function closeModal() {
      modal.classList.add("hidden");
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.focus(); // Return focus to open button
    }
  
    // Open modal on button click
    openBtn.addEventListener("click", () => {
      openModal();
    });
  
    // Close modal on button click
    closeBtn.addEventListener("click", () => {
      closeModal();
    });
  
    // Allow ESC key to close modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  })();
  