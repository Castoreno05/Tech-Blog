// Grab New Post button
var newPost = document.getElementById("newPost");
// Grab Create button
var create = document.getElementById("create");
// Grab Submit button
var submit = document.querySelector(".submit");
// Create a body variable
var body = document.body.children[1];

// Remove child (section) when submit has been clicked
// Append post to the dashboard
addEventListener("DOMContentLoaded", () => {
  $(".submit").on("click", function () {
    var sectionThree = document.getElementById("section-three");
    var newTitle = document.querySelector(".title");
    var content = $(this)
    .parent("div")
    .siblings("div")
    .children("form")
    .children("textarea")
    .val();

    // Place values into variables to use on the post
    var title = newTitle.value;
    var newPost = { title, content };
    console.log(newPost);

    // Create a variable for post url
    var posts = `/api/posts`;
    // Create POST request to the Posts model
    var options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    };
    fetch(posts, options).then((response) => {
      // console.log(newPost);

      // // Remove the text values
      // if (newTitle.value && newContent.value != "");
      // newTitle.value = "";
      // newContent.value = "";
      // // Remove the display
      // sectionThree.setAttribute("style", "display:none;");
    });
    location.reload();
    console.log(posts, options);
  });
});

addEventListener("DOMContentLoaded", () => {
  $(".submitEdit").on("click", function () {
    console.log("clicked");
    var title = $(this).parent("div").siblings("div").children("form").children("input").val();
    var content = $(this).parent("div").siblings("div").children("form").children("textarea").val();
    var submittedDraft = { title, content };
    // console.log(submittedDraft);

    var posts = `/api/posts`;
    var options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(submittedDraft),
    };
    fetch(posts, options).then((response) => {

    });
    location.reload();
  });
});

// Remove child (section) when create has been clicked
// Post results from title and content inputs
// Reset input values
addEventListener("DOMContentLoaded", () => {
  $(".create").on("click", function () {
    console.log("clicked");
    var sectionThree = document.getElementById("section-three");
    var newTitle = document.querySelector(".title");
    var content = $(this)
      .parent("div")
      .siblings("div")
      .children("form")
      .children("textarea")
      .val();

    console.log(content);

    // Place values into variables to use on the post
    var title = newTitle.value;
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
      // // Remove the text values
      // if (newTitle.value && content != "") {
      //   newTitle.value = "";
      //   content = "";
      //   // Remove the display
      //   sectionThree.setAttribute("style", "display:none;");
      // }
    });
    location.reload();
  });
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

    var data = $(this).data("draftcardid");
    var dataSet = $("#" + data);
    // console.log(data);
    editContainer = $(".editContainer").children("section");
    // var dataSet = editContainer.find("#" + data);

    dataSet.attr("style", "");
    // console.log(dataSet);
  });
});

// Update draft content
addEventListener("DOMContentLoaded", () => {
  $(".updateDraft").on("click", function () {
    var id = $(this).parent("div").parent("section").attr("id");
    var title = $(this).parent("div").siblings("div").children("form").children("input").val();
    var content = $(this)
      .parent("div")
      .siblings("div")
      .children("form")
      .children("textarea")
      .val();
    var newContent = { title, content };
    console.log(newContent);
    // Fetch request to update drafts content using corresponding id

    fetch(`api/drafts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContent),
    }).then((response) => response.json());
    location.reload();
  });
});

// Delete draft from edit post
addEventListener("DOMContentLoaded", () => {
  $(".deleteDraft").on("click", function () {
    // console.log("clicked");

    var id = $(this).parent("div").parent("section").attr("id");
    console.log(id);
    // Delete request using draft id
    fetch(`/api/drafts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        // this is the data we get after putting our data,
        console.log(data)
      );
    location.reload();
  });
});
