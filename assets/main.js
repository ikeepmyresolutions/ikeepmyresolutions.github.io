$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    $("#reminder-form").submit(function(event) {
        $.post('http://ec2-3-16-26-254.us-east-2.compute.amazonaws.com', {email: $('#email').val()}, function () {
            $('#success-subscribed').show();
        });
        event.preventDefault();
    });
})