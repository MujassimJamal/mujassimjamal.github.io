// navbar.js

// Function to include the navbar into the designated container
function includeNavbar() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbarContainer').innerHTML = data;
      });
  }
  
  // Call the includeNavbar function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", includeNavbar);
  