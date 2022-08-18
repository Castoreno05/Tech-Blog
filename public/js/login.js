// Grab sign-up button on login form
var signUp = document.getElementById("switch");
var login = document.getElementById("log");
var signUpBtn = document.getElementById("signUp");

// When the sign up button is clicked. Show sign-up form.
// signUp.addEventListener("click", () => {
//   var sectionOne = document.getElementById("section-one");
//   // console.log(sectionOne)
//   sectionOne.setAttribute("style", "display:none;");

//   var sectionTwo = document.getElementById("section-two");
//   // console.log(sectionTwo)
//   sectionTwo.setAttribute("style", "");
// });

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  }
};

login && login.addEventListener("click", loginFormHandler);
signUpBtn && signUpBtn.addEventListener("click", signupFormHandler);
