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

  $(".waton-desc").hover(function() {
     $('.waton-desc').toggleClass("work-box-hover");
     $('.waton-desc > p.box-title').toggleClass("title-hover");
     $('.waton-desc > p.desc').toggle();
  });

  $(".quadris-desc").hover(function() {
     $('.quadris-desc').toggleClass("work-box-small-hover");
     $('.quadris-desc > p.box-title').toggleClass("title-hover");
     $('.quadris-desc > p.desc').toggle();
  });

  $(".aspire-desc").hover(function() {
     $('.aspire-desc').toggleClass("work-box-small-hover");
     $('.aspire-desc > p.box-title').toggleClass("title-hover");
     $('.aspire-desc > p.desc').toggle();
   });  

  $(".www-desc").hover(function() {
     $('.www-desc').toggleClass("work-box-hover");
     $('.www-desc > p.box-title').toggleClass("title-hover");
     $('.www-desc > p.desc').toggle();
  });
});

