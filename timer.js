// Set the expiration date of the time lock (in milliseconds)
const expirationDate = new Date('2023-03-31T00:00:00Z').getTime();

// Function to start the timer
function startTimer() {
  // Update the countdown timer every second
  setInterval(() => {
    // Get the current date and time (in milliseconds)
    const now = new Date().getTime();

    // Calculate the time remaining until the time lock expires
    const timeRemaining = expirationDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML to display the countdown timer
    const countdownTimer = document.querySelector('.countdown-timer');
    countdownTimer.innerHTML = `Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // If the time lock has expired, stop the timer and disable the button
    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.querySelector('#start-timer').disabled = true;
    }
  }, 1000);
}

// Attach the startTimer function to the button
document.querySelector('#start-timer').addEventListener('click', startTimer);