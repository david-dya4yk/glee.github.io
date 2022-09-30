$(function () {
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
