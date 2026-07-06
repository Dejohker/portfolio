// Get the menu button from HTML
const menuBtn = document.getElementById("menuBtn");

// Get the nav links from HTML
const navLinks = document.getElementById("navLinks");

// When menu button is clicked, show or hide the menu
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Get the contact form
const contactForm = document.getElementById("contactForm");

// Get the message paragraph
const formMessage = document.getElementById("formMessage");

// When user submits the form
contactForm.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if any field is empty
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Show success message
  formMessage.textContent = "Thank you, " + name + "! Your message has been received.";

  // Clear the form
  contactForm.reset();
});