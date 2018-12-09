$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    $("#reminder-form").submit(function(event) {
        event.preventDefault();
        console.log( "Handler for .submit() called.");
    });
})