addEventListener("DOMContentLoaded", () => {
  $(".commentBtn").on("click", () => {
    var content = $(".commentBtn").siblings("textarea").val();
    var post_id = $(".commentDiv").data("id");
    newComment = { content, post_id };
    console.log(newComment);

    var comments = `/api/comments`
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
    
  });
});
// var str = document.querySelector(".createdAt").textContent;
// // console.log(str.replace("Mon", ""));
// var newString = str.replace(" 11:33:02 GMT-0500 (Central Daylight Time)", "")
// console.log(newString);