// Scroll down to moovobrain product

$('.scroll-down').click(function () {
  $('html, body').animate({
    scrollTop: $("#moovobrain-product").offset().top - 60
  }, 1500, 'easeInOutExpo');
  return false;
});
