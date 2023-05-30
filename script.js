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
