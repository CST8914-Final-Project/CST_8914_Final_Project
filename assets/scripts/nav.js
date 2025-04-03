document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
  
    if (!toggleBtn || !nav) return;
  
    toggleBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen.toString());
    });
});
  