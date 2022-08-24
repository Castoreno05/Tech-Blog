addEventListener("DOMContentLoaded", () => {
  $(".commentBtn").on("click", () => {
    var content = $(".commentBtn").siblings("textarea").val();
    var post_id = $(".commentDiv").data("id");
    newComment = { content, post_id };
    console.log(newComment);

    var comments = `/api/comments`;
    var options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    };
    fetch(comments, options).then((response) => {
      console.log("Success!");
    });
    var commentStyle = $(".commentDiv").attr("style", "display:none;");
    console.log(commentStyle);
  });
});

// Grab the text content of when its created, remove unnessessary text then reappend
window.onload = function updatedText() {
  var removeText = document.querySelector(".createdAt").textContent;
  var newText = removeText.slice(0, 16);
  // console.log(newText)
  var pElement = document.createElement("p");
  pElement.textContent = newText;
  var body = document.body.children[1];
  body.appendChild(pElement);
  // console.log(body, pElement)
  commentDate();
};

function commentDate() {
  var removeText = document.querySelectorAll(".commentDate");
  removeText.forEach(function (text) {
    var removeText = document.querySelector(".commentDate").textContent;
    var newText = removeText.slice(0, 16);
    text.textContent = newText;
    // console.log(newText);
  });
}