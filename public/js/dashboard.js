// Grab New Post button
var newPost = document.getElementById("newPost");
// Grab Create button
var create = document.getElementById("create");
// Grab Submit button
var submit = document.getElementById("submit");
// Create a body variable
var body = document.body.children[1];

// function createdPost() {
//   // Create a variable for the url to live
//   var post = `/api/posts`;
//   // Make a fetch request to obtain createdPosts
//   fetch(post)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var titles = data[i].title;
//         var creation = data[i].createdAt;
//         var newCreation = creation.slice(0, creation.length - 14);
//         // console.log(titles, newCreation);

//         // Create element to populate the body
//         var dashboardPost = document.createElement("p");
//         // Create link around the element
//         var anchorTag = document.createElement("a");

//         dashboardPost.textContent = titles;
//         // Set attributes to the appended elements
//         dashboardPost.setAttribute("class", "postBtn");
//         anchorTag.setAttribute("class", "btnLinks");

//         // Append a button to the body
//         body.appendChild(anchorTag).appendChild(dashboardPost);
//       }
//     });
// }

// Remove child (section) when submit has been clicked
// Append post to the dashboard
submit.addEventListener("click", (event) => {
  event.preventDefault();
  var sectionThree = document.getElementById("section-three");
  var newTitle = document.getElementById("title");
  var newContent = document.getElementById("content");

  // Place values into variables to use on the post
  var title = newTitle.value;
  var content = newContent.value;
  var newPost = { title, content };
  console.log(newPost);

  // Create a variable for post url
  var postApi = `/api/posts`;
  // Create POST request to the Posts model
  var options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newPost),
  };
  fetch(postApi, options).then((response) => {
    // console.log(newPost);

    // Remove the text values
    if (newTitle.value && newContent.value != "");
    newTitle.value = "";
    newContent.value = "";
    // Remove the display
    sectionThree.setAttribute("style", "display:none;");
  });

  location.reload();
});

// Remove child (section) when create has been clicked
// Post results from title and content inputs
// Reset input values
create.addEventListener("click", (event) => {
  event.preventDefault();
  var sectionThree = document.getElementById("section-three");
  var newTitle = document.getElementById("title");
  var newContent = document.getElementById("content");

  // Place values into variables to use on the post
  var title = newTitle.value;
  var content = newContent.value;
  var newPost = { title, content };
  console.log(newPost);

  // Create a variable for post url
  var drafts = `/api/drafts`;
  // Create POST request to the Posts model
  var options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newPost),
  };
  fetch(drafts, options).then((response) => {
    // console.log(newPost);

    // Remove the text values
    if (newTitle.value && newContent.value != "");
    newTitle.value = "";
    newContent.value = "";
    // Remove the display
    sectionThree.setAttribute("style", "display:none;");
  });
  location.reload();
});

// When a new post is selected. Show newPost form.
newPost.addEventListener("click", () => {
  var sectionThree = document.getElementById("section-three");
  // Remove the display for section-three
  sectionThree.setAttribute("style", "");
});

// Place an onclick on draftCards
addEventListener("DOMContentLoaded", () => {
  $(".draftCard").on("click", function () {
    var draftCard = $(".section-four");
    console.log(draftCard);
  });
});