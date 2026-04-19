// Register
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (user === "" || pass === "") {
    alert("Please Fill out this fields");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Registered Successfully!");
  window.location.href = "login.html";
}

// Login
function login() {
  console.log("Login clicked");

  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if (user === "" || pass === ""){
    alert("Please fill out this fields");
    return;
  }

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (user === storedUser && pass === storedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "Dashboard.html";
  } 
  else {
    alert("Invalid username or password");
  }
}

// Check Login (Protected Page)
function checkLogin() {
  let isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn !== "true") {
    // Save current page
    window.location.href = "login.html";
  }
}

// Logout
function goLogout() {
  console.log("logout working");

  alert("You have logged out Successfully!");
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}