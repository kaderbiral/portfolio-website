$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('fixing');
        } else {
            $('.navbar').removeClass('fixing');
        }
    });
}); 