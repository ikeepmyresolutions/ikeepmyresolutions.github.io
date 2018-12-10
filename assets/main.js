$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    $("#reminder-form").submit(function(event) {
        $.post('https://ikeepmyresolutions.org', {email: $('#email').val()}, function () {
            $('#success-subscribed').show();
        });
        event.preventDefault();
    });
})