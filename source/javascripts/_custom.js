$("#scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#contest").offset().top},
        'slow');
});