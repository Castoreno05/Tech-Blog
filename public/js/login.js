// Grab sign-up button on login form
var signUp = document.getElementById('switch');

// When the sign up button is clicked. Show sign-up form.
signUp.addEventListener('click', () =>{
    var sectionOne = document.getElementById('section-one');
    // console.log(sectionOne)
    sectionOne.setAttribute("style", "display:none;");

    var sectionTwo = document.getElementById('section-two');
    // console.log(sectionTwo)
    sectionTwo.setAttribute("style", "");
})