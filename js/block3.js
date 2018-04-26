$(document).ready(function() {
    $('.carousel-control-next-icon, .carousel-control-prev-icon').click(function() {
        $('.look').html(+$('.look').html()+1);
    });
});

$(document).ready(function() {
    $('.like').click(function() {
        var notBeActive = !$(this).hasClass('active');
        if (notBeActive) {
            $(this).html(+$(this).html() + 1);
            $(this).addClass('active');
        } else {
            $(this).html(+$(this).html() - 1);
            $(this).removeClass('active');
        }
    });
});

$(document).ready(function() {
    $('.speach').click(function() {
        var comment=prompt("Your comment: ");
        if (comment) {
            alert("Thanks for your comment!");
            $(this).html(+$(this).html()+1);
        } else {
            alert("No comments!")
        }
    });
});