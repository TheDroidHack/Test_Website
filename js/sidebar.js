  // Load Sidebar
  fetch('sidebar.html')
    .then(response => {
      console.log('Sidebar fetch successful:', response); // Log the response
      return response.text();
    })
    .then(data => {
      console.log('Sidebar data:', data); // Log the sidebar HTML content
      document.getElementById('sidebar-placeholder').innerHTML = data;
      setActiveLink(); // Set active link after sidebar is loaded
    })
    .catch(error => console.error('Error loading sidebar:', error));
