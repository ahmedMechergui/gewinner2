console.log('accessires carousel srcript loaded');
$(function () {
  $('.accessories-slick-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="custom-arrow next-arrow" aria-label="Next" type="button"><i class="icofont-hand-drawn-right"></i></div>',
    prevArrow: '<div class="custom-arrow prev-arrow" aria-label="Next" type="button"><i class="icofont-hand-drawn-alt-left"></i></div>',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //   .on('setPosition', function (event, slick) {
  //   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // });


});


// .on('setPosition', function (event, slick) {
//   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
// })

