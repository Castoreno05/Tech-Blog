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
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    // Remove the text values
    if (title.value && content.value != "");
    title.value = "";
    content.value = "";
    // Remove the display
    sectionThree.setAttribute("style", "display:none;")
})
