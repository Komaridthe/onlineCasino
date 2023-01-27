$(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
