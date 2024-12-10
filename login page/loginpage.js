document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Get form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Hardcoded credentials (you can replace this with server-side validation later)
  var validUsername = "Admin@gmail.com";
  var validPassword = "Admin@1234";

  // Check the credentials
  if (username === validUsername && password === validPassword) {
      // Redirect to the homepage
      window.location.href = "../homepage/homepage.html"; // Replace with the actual path of your homepage
  } else {
      // Display error message if credentials are incorrect
      document.getElementById("error-message").textContent = "Invalid username or password.";
      document.getElementById("error-message").style.color = "red";
  }
});
