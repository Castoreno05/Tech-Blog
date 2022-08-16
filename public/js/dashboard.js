// Grab New Post button
var newPost = document.getElementById("newPost");
// Grab Create button
var create = document.getElementById("create");

// When a new post is selected. Show newPost form.
newPost.addEventListener("click", () => {
  var sectionThree = document.getElementById("section-three");
  // Remove the display for section-three
  sectionThree.setAttribute("style", "");
});

// Remove child (section) when create has been clicked
create.addEventListener("click", () => {
  var sectionThree = document.getElementById("section-three");
  var newTitle = document.getElementById("title");
  var newContent = document.getElementById("content");

  // Place values into variables to use on the post
  var title = newTitle.value;
  var content = newContent.value;
  var newPost = { title, content };
  console.log(newPost)

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
  fetch(postApi, options);
  // console.log(newPost);

  // Remove the text values
  if (newTitle.value && newContent.value != "");
  newTitle.value = "";
  newContent.value = "";
  // Remove the display
  sectionThree.setAttribute("style", "display:none;");

});
