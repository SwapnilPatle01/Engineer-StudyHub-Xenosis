// Created a function to fetch job listings from the backend API

function fetchJobListings() {
    fetch('')  // here to add the API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayJobs(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        showError('Failed to load job listings.');
      });
  }

  function showError(message) {
    const jobListingsDiv = document.getElementById('job-listings');
    jobListingsDiv.innerHTML = `<p>${message}</p>`;
  }
  
  window.onload = fetchJobListings;  