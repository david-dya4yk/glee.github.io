$(function () {
  $(".shop__btn").on("click", function () {
    $(".shop__btn").removeClass("shop__btn--active");
    $(this).addClass("shop__btn--active");
  });

  $(".button__list").on("click", function () {
    $(".shop__item").addClass("shop__item--list");
    $(".product").addClass("product--list");
  });


  $(".button__grid").on("click", function () {
    $(".shop__item").removeClass("shop__item--list");
    $(".product").removeClass("product--list");
  });

  $(".price__slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 500,
    min_interval: 100,
    prefix: "$",
  });

  $(".rateyo").rateYo({
    rating: 4,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });

  $(".slider").slick({
    arrows: false,
    dots: true,
  });
  const controls = {
    controls: {
      scope: "local",
    },
  };
  mixitup(".mixitup-1", controls);
  mixitup(".mixitup-2", controls);
});
