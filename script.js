$(document).ready(function () {

    var $target = $('html,body');

    $("#button1").click(function () {
        $target.stop().animate({
            scrollTop: $("#aboutsection").offset().top
        }, 80);
        return false;
    });

    $("#button2").click(function () {
        $target.stop().animate({
            scrollTop: $("#portfolio").offset().top
        }, 80);
        return false;
    });

    $("#button3").click(function () {
        $target.stop().animate({
            scrollTop: $("#contact").offset().top
        }, 80);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(); // Else fade out the arrow
        }
        return false;
    });

    $('#return-to-top').click(function () { // When arrow is clicked
        $target.stop().animate({
            scrollTop: 0 // Scroll to top of body
        }, 80);
        return false;
    });
});