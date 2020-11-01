!(function ($) {
  "use strict";

  // // TABLET APP VIDEO PLAY BUTTON TRIGGER
  // $(".text-video-btn").on("click", function () {
  //   $(".vjs-big-play-button").trigger("click");
  // });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#header').addClass('box-shadow');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#header').removeClass('box-shadow');
    }
  });



  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }


  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Init AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out-back",
    once: true
  });

})(jQuery);
