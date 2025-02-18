document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get user input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy check (Replace with real authentication logic)
    if (email === "test@example.com" && password === "password123") {
        alert("Login Successful!");

        // Store login session (Optional)
        localStorage.setItem("userLoggedIn", "true");

        // Redirect to the main page
        window.location.href = "index.html";  // Change to your main page URL
    } else {
        alert("Invalid email or password. Try again!");
    }
});
