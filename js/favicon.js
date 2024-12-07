<script>
  // Create a new <link> element
  const faviconLink = document.createElement('link');
  
  // Set the attributes for the favicon
  faviconLink.rel = 'icon';
  faviconLink.href = 'favicon.ico'; // Path to your favicon file
  faviconLink.type = 'image/x-icon';
  
  // Append the <link> element to the <head> of the document
  document.head.appendChild(faviconLink);
</script>
