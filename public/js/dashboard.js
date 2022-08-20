// Grab New Post button
var newPost = document.getElementById("newPost");
// Grab Create button
var create = document.getElementById("create");
// Grab Submit button
var submit = document.getElementById("submit");
// Create a body variable
var body = document.body.children[1];

// Remove child (section) when submit has been clicked
// Append post to the dashboard
submit.addEventListener("click", (event) => {
  event.preventDefault();
  var sectionThree = document.getElementById("section-three");
  var newTitle = document.querySelector(".title");
  var newContent = document.querySelector(".content");

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
  console.log('clicked');
});

// Remove child (section) when create has been clicked
// Post results from title and content inputs
// Reset input values
create.addEventListener("click", (event) => {
  event.preventDefault();
  var sectionThree = document.getElementById("section-three");
  var newTitle = document.querySelector(".title");
  var newContent = document.querySelector(".content");

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
// Show each draftcards section
addEventListener("DOMContentLoaded", () => {
  $(".draftCard").on("click", function () {
    $(this).hide();

    var data = $(this).data("draftcardid")
    var dataSet = $("#" + data)
    // console.log(data);
    editContainer = $(".editContainer").children("section");
    // var dataSet = editContainer.find("#" + data);

    dataSet.attr("style", "")
    console.log(dataSet);
  });
});

// Update post content
// addEventListener("DOMContentLoaded", () => {
//   $(".updateDraft").on("click", function () {
//     var id = $(this).parent("div").parent("section").attr("id")
//     console.log(id);
//     fetch(`/api/drafts/${id}`, {
//       method: 'UPDATE'
//     }).then(response => {
//       return response.json()
//     }).then(data =>
//       // this is the data we get after putting our data,
//       console.log(data)
//     );
//   });
// });

// Delete draft from edit post
addEventListener("DOMContentLoaded", () => {
  $(".deleteDraft").on("click", function () {
    // console.log("clicked");

    var id = $(this).parent("div").parent("section").attr("id")
    console.log(id);
    // Delete request using draft id
    fetch(`/api/drafts/${id}`, {
      method: 'DELETE'
    }).then(response => {
      return response.json()
    }).then(data =>
      // this is the data we get after putting our data,
      console.log(data)
    );
    location.reload();
  });
});