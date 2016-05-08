var aboutPadding = parseInt($('#about').css('padding-top'), 10);
var navHeight = $(".navbar").outerHeight();

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var headerHeight = $("#Home").height();
  var aboutPoint = $('#about').offset().top;
  var portfolioPoint = $('#portfolio-anchor').offset().top;
  var contactPoint = $('#contact-anchor').offset().top;

  if (scrollTop < headerHeight) { //if scrolltop is on header
    $('.navbar').removeClass('scrolled-nav'); //remove .scrolled-nav from navbar
    $('.nav-btn').removeClass('scrolled-nav'); //remove .scrolled-nav from navbtns 
    $('#about-btn').removeClass('on-section'); //remove .on-section from about-btn
    $(".sticky").removeClass("navbar-fixed-top"); //remove fixed navbar
    $("#about").css("padding-top", ""); //remove extra padding on scrollup
  } else { //if scrolltop is below header
    $('.navbar').addClass('scrolled-nav'); //add .scrolled-nav from navbar 
    $('.nav-btn').addClass('scrolled-nav'); //add .scrolled-nav from navbbtns
    $(".sticky").addClass("navbar-fixed-top"); //make navbar fixed
    $("#about").css("padding-top", navHeight + aboutPadding + "px"); //smooth transition on scrolldown
  }

  //add .on-section to section currently on scrolltop, remove .onsection from neighboring sections
  if (scrollTop > aboutPoint && scrollTop < (portfolioPoint - navHeight)) {
    $('#about-btn').addClass('on-section');
    $('#portfolio-btn').removeClass('on-section');
  } else if (scrollTop > (portfolioPoint - navHeight) && scrollTop < (contactPoint - navHeight)) {
    $('#about-btn').removeClass('on-section');
    $('#portfolio-btn').addClass('on-section');
    $('#contact-btn').removeClass('on-section');
  } else if (scrollTop > (contactPoint - navHeight)) {
    $('#portfolio-btn').removeClass('on-section');
    $('#contact-btn').addClass('on-section');
  }
});

$('document').ready(function() {
  var lineBorder = parseInt($('.section-seperator').css('border-top-width'), 10);

  //nav buttons animate html and body(for cross-browser comp.) to anchors, anchors modified for navbar and <hr> that seperates sections
  $('.to-home').click(function() {
    $('html, body').animate({
      scrollTop: $('#Home').offset().top - navHeight
    }, 600);
  });
  $('.to-about').click(function() {
    $('html,body').animate({
      scrollTop: $('#about-anchor').offset().top - navHeight - aboutPadding + lineBorder
    }, 600);
  });
  $('.to-portfolio').click(function() {
    $('html, body').animate({
      scrollTop: $('#portfolio-anchor').offset().top - navHeight + lineBorder
    }, 600);
  });
  $('.to-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact-anchor').offset().top - navHeight + lineBorder
    }, 600);
  });

  /*var thumbHeight = $('.thumbnail').height();
  var captHeight = $('.caption').height();
  $('.caption').css({
    'bottom': (thumbHeight-captHeight)/2   
  });
  console.log(captHeight);*/

});