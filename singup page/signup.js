document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
        return;
    } else {
        passwordError.style.display = 'none';
    }

    // Send data to the backend (replace `/register` with your backend endpoint)
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Signup successful!');
                // Optionally redirect to the login page
                window.location.href = '/login';
            } else {
                alert('Signup failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during signup.');
        });
});