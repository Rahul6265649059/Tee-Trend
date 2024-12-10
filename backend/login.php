<?php
session_start();  // Start the session to manage user login

// Include the database connection
include('db.php'); 

// Check if form data has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare and execute the query to fetch the user from the database
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    // Check if user is found
    if ($result->num_rows > 0) {
        // User exists, set session variable and redirect to home page
        $_SESSION['email'] = $email;
        header("Location: ../home_page/home.html");  // Redirect to home page
    } else {
        // Show error message if login fails
        echo "Invalid email or password";
    }
}
?>
