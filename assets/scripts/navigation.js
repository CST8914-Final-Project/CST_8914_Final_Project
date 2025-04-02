function navigateTo(event, page) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const sections = ['home', 'services', 'schedule'];
  
    sections.forEach(id => {
      document.getElementById(id).classList.add('hidden');
      document.getElementById(`${id}-link`).setAttribute("aria-pressed", "false");
    });
  
    const activeSection = document.getElementById(page);
    const activeLink = document.getElementById(`${page}-link`);
  
    activeSection.classList.remove('hidden');
    activeSection.setAttribute("tabindex", "-1");
    activeSection.focus();
    activeLink.setAttribute("aria-pressed", "true");
  
    // Update page title dynamically
    document.title = `Empower Ability Labs - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
    history.pushState({ page }, document.title, `#${page}`);
}
  
// Enable back/forward navigation
window.onpopstate = function (event) {
    const sections = ['home', 'services', 'schedule'];
    sections.forEach(id => {
      document.getElementById(id).classList.add('hidden');
      document.getElementById(`${id}-link`).setAttribute('aria-pressed', 'false');
    });
  
    let page = event.state ? event.state.page : 'home';
    document.getElementById(page).classList.remove('hidden');
    document.getElementById(`${page}-link`).setAttribute('aria-pressed', 'true');
    document.title = `Empower Ability Labs - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
};
  
// Enable keyboard navigation for links (Enter & Space)
document.addEventListener("keydown", function(event) {
    if ((event.key === " " || event.key === "Enter") && document.activeElement.tagName === "A") {
      event.preventDefault();
      document.activeElement.click();
    }
});

  