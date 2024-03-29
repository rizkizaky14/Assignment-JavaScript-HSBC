// Load users from local storage
let users = [];

const usersData = localStorage.getItem('users');
if (usersData) {
  users = JSON.parse(usersData);
} else {
  console.log('No users data found in local storage');
}

// Function to authenticate user
function authenticateUser(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

// Handle form submission
const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('inputEmail').value;
  const password = document.getElementById('password').value;
  
  const user = authenticateUser(username, password);
  
  if (user) {
    messageDiv.textContent = 'Login successful';
    // You can redirect the user to another page here
  } else {
    messageDiv.textContent = 'Invalid username or password';
  }
});

// Handle sign up button click
const signUp = document.getElementById('signUp');
signUp.addEventListener('click', function() {
  // You can redirect the user to sign up page or show a sign up form here
  alert('Sign Up clicked');
});

// Handle forgot password button click
const forgotPass = document.getElementById('forgotPass');
forgotPass.addEventListener('click', function() {
  // You can redirect the user to forgot password page or show a forgot password form here
  alert('Forgot Password clicked');
});
