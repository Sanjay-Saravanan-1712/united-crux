document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home");
    const recipesLink = document.getElementById("recipes");
    const submitLink = document.getElementById("submit");
    const aboutLink = document.getElementById("about");
    const mainContent = document.getElementById("main-content");
  
    // Load default content
    loadContent("home");
  
    // Event listeners for navigation
    homeLink.addEventListener("click", () => loadContent("home"));
    recipesLink.addEventListener("click", () => loadContent("recipes"));
    submitLink.addEventListener("click", () => loadContent("submit"));
    aboutLink.addEventListener("click", () => loadContent("about"));
  
    // Function to load content dynamically
    function loadContent(page) {
      fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
          mainContent.innerHTML = data;
        })
        .catch(error => console.log(error));
    }
  });
  