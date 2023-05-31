// Get the required elements
const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.getElementById('submit');
const ratingDiv = document.getElementById('card-rating');
const confirmationDiv = document.querySelector('.confirmation');
const starSpan = document.getElementById('star');
const ratingParagraph = document.getElementById('rating');

// Disable submit button initially
submitButton.disabled = true;

// Add event listeners to rating buttons
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedRating = button.textContent;
    starSpan.textContent = selectedRating;
    submitButton.disabled = false;
  });
});

// Handle submit button click event
submitButton.addEventListener('click', () => {
  ratingDiv.style.display = 'none';
  confirmationDiv.style.display = 'flex';
  const selectedRating = starSpan.textContent;
  ratingParagraph.textContent = `You selected ${selectedRating} out of 5 stars.`;
});

ratingButtons.forEach(function(button) {
  // Add a click event listener to each rating button
  button.addEventListener("click", function() {
    // Get the value of the clicked rating button
    var ratingValue = parseInt(button.textContent);

    // Get the paragraph with the id "card-message"
    var cardMessage = document.getElementById("card-message");

    // Check if the rating is 3 or below
    if (ratingValue <= 3) {
      // Change the text content of the card message paragraph
      cardMessage.textContent =
        "We apologise for any possible inconveniences suffered. Please let us know about any encountered issues by getting in touch with us.";
    }
  });
});
