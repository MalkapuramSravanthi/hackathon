// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  // Handle the "Explore Profiles to Adopt" button click
  const exploreButton = document.querySelector('button');
  
  exploreButton.addEventListener('click', () => {
    // Show an alert or navigate to a new page
    alert('Redirecting to profiles...');
    
    // Uncomment the next line to redirect the user to a different page (example URL):
    // window.location.href = 'profiles.html';
  });

  // Highlight the active navigation link (optional)
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add 'active' class to the clicked link
      e.target.classList.add('active');
    });
  });

});
