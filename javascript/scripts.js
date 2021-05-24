src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"

$(function () {
    var image = $(".mainmenu").find('img').attr('src');
    $(".mainmenu a").mouseover(function () {
        var newimg = $(this).attr('data-image');
        $(this).parent().find('img').attr("src", newimg);
    });
});
