$(document).ready(function() {
  $('.slider-wrapper').slick({
    slidesToShow: 6,
    autoplay: true,
    draggable: false,
    centerMode: false,
    variableWidth: false, 
    responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 4,
          }
        }
    ]
  });
});