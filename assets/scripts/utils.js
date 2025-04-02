function setCurrentYear(selector = "#year") {
    const yearElement = document.querySelector(selector);
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
}
  