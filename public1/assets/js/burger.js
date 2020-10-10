$(function () {
  // burger to database click event
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let burgerbox = {
      burger_name: $("#burgerbox").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerbox,
    }).then(() => {
      // had more help with this (reload page) hardest aspects for me coding
      location.reload();
    });
  });
  //handle click event to Update the burgers to devoured, frontend and MySQLdb
  $(".devour-burger").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    let isdevoured = {
      devoured: 1,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isdevoured,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
  console.log("error");

  $(".delete-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
