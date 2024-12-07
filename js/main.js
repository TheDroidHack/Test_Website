// Function to load navbar, footer, and sidebar dynamically
window.onload = function () {
  // Load Navbar
  fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      setActiveLink(); // Set active link after loading the navbar
      initializeDarkMode(); // Initialize dark mode after navbar load
      setupSearchFunctionality();
    })
    .catch(error => console.error('Error loading navbar:', error));

  // Load Footer
  fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
};

// Function to set active link based on the current URL
function setActiveLink() {
  const currentUrl = window.location.pathname.replace(/^\/+/, '');
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navbarLinks.forEach(link => {
    const linkHref = link.getAttribute('href').replace(/^\/+/, '');
    if (currentUrl === linkHref || (currentUrl === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const currentUrl1 = window.location.pathname.split('/').pop();
  const sidebarLinks = document.querySelectorAll('#sidebar-placeholder .nav-link');
  sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl1) {
      link.classList.add('active');
      link.classList.remove('text-white');
    } else {
      link.classList.remove('active');
      link.classList.add('text-white');
    }
  });
}

// Function to toggle dark mode
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const isDarkMode = darkModeToggle.checked;

  if (isDarkMode) {
    htmlElement.setAttribute('data-bs-theme', 'dark'); // Apply dark mode
    localStorage.setItem('theme', 'dark'); // Save dark mode preference
  } else {
    htmlElement.setAttribute('data-bs-theme', 'light'); // Apply light mode
    localStorage.setItem('theme', 'light'); // Save light mode preference
  }
}

// Function to load the saved theme and checkbox state on page load
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const htmlElement = document.documentElement;
  const darkModeToggle = document.querySelector('#darkModeToggle');

  htmlElement.setAttribute('data-bs-theme', savedTheme);
  darkModeToggle.checked = savedTheme === 'dark'; // Check the toggle if theme is 'dark'
}

// Initialize dark mode when navbar is loaded
function initializeDarkMode() {
  loadThemePreference(); // Load the saved theme preference when page loads

  const darkModeToggle = document.querySelector('#darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode); // Add event listener to toggle button
  }
}

function setupSearchFunctionality() {
  // Get the search input element
  var searchInput = document.getElementById('searchInput');

  if (searchInput) {
    // Add event listener for search form submission
    var searchForm = searchInput.closest('form');
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      searchTutorials();
    });
  }
}

function searchTutorials() {
  var input = document.getElementById('searchInput').value.trim();
  if (input) {
    // Redirect to search.html with the search term as a query parameter
    window.location.href = `/search.html?query=${encodeURIComponent(input)}`;
  }
}
