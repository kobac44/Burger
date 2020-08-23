$(function () {
    // burger to database click event
    ('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#tastyburger').val().trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: "POST",
            data: tastyBurger
        }).then(() => {
            // had more help with this (reload page) hardest aspects for me coding
            location.reload();
        });
    });
});
//handle click event to Update the burgers to devoured on the frontend and db
$('.devour-burger').on('click', function (event) {
    event.preventDefault();
    let id = $(this).data('id');
    let isdevoured = {
        devoured: 1
    };
    $.ajax('/api/burgers/' + id, {
        type: "PUT",
        data: isdevoured
    }).then(() => {
        // reload the page
        location.reload();
    });
});
