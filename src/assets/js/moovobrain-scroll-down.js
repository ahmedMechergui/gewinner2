// Scroll down to moovobrain product

$('.scroll-down').click(function () {
  $('html, body').animate({
    scrollTop: $("#moovobrain-product").offset().top - 65
  }, 1500, 'easeInOutExpo');
  return false;
});
