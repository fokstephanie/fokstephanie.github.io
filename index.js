$(document).ready(function(){
  $("#work-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
    return false;
  });
  $("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
    return false;
  });
/*
  $(".work-box").hover(function() {
    var title = $('.word-box > ');
    title.fadeToggle();
    var desc = $(this).querySelector("p.desc");
    desc.fadeToggle();
  })*/
});

