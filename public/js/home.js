// Use jQuery to collect the value and id of 'comment' siblings
// Post to comments database
addEventListener("DOMContentLoaded", () => {
  $(".comment").on("click", function () {
    const content = $(this).siblings(".comment-input").val();
    const post_id = $(this).siblings(".comment-input").data("postid");
    console.log(content, post_id);
    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            content,
            post_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        window.location.reload()
    })
  });
});


