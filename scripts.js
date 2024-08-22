document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (add more complex logic as needed)
    if (username === '' || password === '') {
        showErrorMessage('Both fields are required.');
        return;
    }

    // Clear error message if validation passes
    showErrorMessage('');
    
    // Example: Simulate login process
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or take any other action as needed
    } else {
        showErrorMessage('Invalid username or password.');
    }
});

function showErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = message ? 'block' : 'none';
}
