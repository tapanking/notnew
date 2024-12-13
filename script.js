// Get elements
const invitation = document.getElementById("invitation");
const secondChance = document.getElementById("second-chance");
const thankYou = document.getElementById("thank-you");

const acceptButton = document.getElementById("accept");
const rejectButton = document.getElementById("reject");

const acceptAgainButton = document.getElementById("accept-again");
const rejectAgainButton = document.getElementById("reject-again");

const startOverButton = document.getElementById("start-over");

// Show the second chance invitation when the first one is rejected
rejectButton.addEventListener("click", () => {
  invitation.style.display = "none";
  secondChance.style.display = "block";
});

// If the second chance is accepted
acceptAgainButton.addEventListener("click", () => {
  secondChance.style.display = "none";
  thankYou.style.display = "block";
});

// If the second chance is rejected
rejectAgainButton.addEventListener("click", () => {
  alert("Well, I'll take that as a no for now, but I won’t give up!");
  // Optionally hide second chance and show a final message, or you can just leave it at this.
});

// If accepted in the first invitation
acceptButton.addEventListener("click", () => {
  invitation.style.display = "none";
  thankYou.style.display = "block";
});

// If 'Start Over' button is clicked, reset the page
startOverButton.addEventListener("click", () => {
  invitation.style.display = "block";
  thankYou.style.display = "none";
  secondChance.style.display = "none";
});
