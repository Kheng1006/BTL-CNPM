function login_manager() {
    window.location.href = "login.html";
}

function login_staff() {
    window.location.href = "login.html"; 
}
function checkCredentials() {
  // Get the username and password from the user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

  // Perform your authentication logic here
  // Check if the user is a manager
    if (username === 'manager' && password === '123') {
    window.location.href = 'homeManager.html'
    alert('Manager login successful!');
    } else if (username === 'student' && password === '123') {
    window.location.href = 'home.html';
    alert('Student login successful!');
    } else {
    alert('Invalid username or password!');
    // Handle the case where the credentials are incorrect
    }
}
