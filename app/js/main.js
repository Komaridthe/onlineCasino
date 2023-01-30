$(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    responsive: [
      // {
      //   breakpoint: 840,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
      // {
      //   breakpoint: 601,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  });
});
$(function () {
  $(".swiper__wrapper").slick({
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      // {
      //   breakpoint: 840,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
