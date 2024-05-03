function toggleNavbar() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
      } else {
        mobileMenu.style.display = "none";
      }
  }

  var mediaQuery = window.matchMedia("(min-width: 767px)");

  function handleMediaChange(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (e.matches) {
      // Full screen view
      mobileMenu.style.display = "none";
    }
  }
  
  mediaQuery.addListener(handleMediaChange);

  function handleSearch() {
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
  
    // Get all course cards
    var courseCards = document.querySelectorAll('.img-cards');
  
    // Variable to track if any course is found
    var found = false;
  
    // Loop through each course card
    courseCards.forEach(function(card) {
      // Get the course title from the card
      var courseTitle = card.querySelector('h4').textContent.toLowerCase();
  
      // Check if the course title contains the search input
      if (courseTitle.includes(searchInput)) {
        // Show the course card
        card.style.display = 'block';
        found = true;
      } else {
        // Hide the course card if it doesn't match the search
        card.style.display = 'none';
      }
    });
  
    // Reset the search input field
    document.getElementById('searchInput').value = '';
  
    // Show message if no courses match the search
    if (!found) {
      alert('Course not found.'); // Consider updating the UI instead of using an alert for a better user experience
    }
  
    // Show all course cards regardless of the search input
    courseCards.forEach(function(card) {
      card.style.display = 'block';
    });
  }
  
  // Attach the handleSearch function to the search button's click event
  document.getElementById('searchButton').addEventListener('click', handleSearch);
  
  
  
  