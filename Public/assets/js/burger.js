$(document).ready(function () {
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
  //handle click event to Update the burgers to devoured on the frontend and db
  $(".devour-burger").on("click", function (event) {
    console.log("burger");
    event.preventDefault();
    let id = $(this).data("id");
    let isdevoured = {
      devoured: 0,
    };
    $.ajax("/" + id, {
      type: "PUT",
      data: isdevoured,
    }).then(() => {
      console.log("change to devour to", newDevour);
      // reload the page
      location.reload();
    });
  });
  console.log("error");
  $(".delete").on("click", function () {
    const id = $(this).data("id");
    console.log("In Delete the id - " + id);
    $.ajax("/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log("deleted burger");
      location.reload();
    });
  });
});
