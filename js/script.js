$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: $(".banner-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".banner-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".catalog-btn").on("click", function (e) {
    e.stopPropagation();
    $(this).find(".arrow").toggleClass("rotate");

    $(this)
      .closest(".catalog-button")
      .find(".catalog-menu")
      .toggleClass("open");
  });

  $(".catalog-button").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".catalog-menu").removeClass("open");
    $(".catalog-btn .arrow").removeClass("rotate");
  });

  function initSlickSlider2() {
    if ($(window).width() < 1025) {
      if (!$(".expert-baskets-slider").hasClass("slick-initialized")) {
        $(".expert-baskets-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(
            ".expert-baskets-slider-wrap .slider-navigation .slick-prev"
          ),
          nextArrow: $(
            ".expert-baskets-slider-wrap .slider-navigation .slick-next"
          ),
          responsive: [
            {
              breakpoint: 451,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
              },
            },
          ],
        });
      }
    } else {
      if ($(".expert-baskets-slider").hasClass("slick-initialized")) {
        $(".expert-baskets-slider").slick("unslick");
      }
    }
  }

  initSlickSlider2();

  $(window).resize(function () {
    initSlickSlider2();
  });

  function initSlickSlider5() {
    if ($(window).width() < 1025) {
      if (!$(".home-info-slider").hasClass("slick-initialized")) {
        $(".home-info-slider").slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
        });
      }
    } else {
      if ($(".home-info-slider").hasClass("slick-initialized")) {
        $(".home-info-slider").slick("unslick");
      }
    }
  }

  initSlickSlider5();

  $(window).resize(function () {
    initSlickSlider5();
  });

  function initSlickSlider3() {
    // Проверка ширины экрана. Если ширина экрана больше 1024 пикселей, то инициализируем слайдер.
    if ($(window).width() > 1024) {
      if (!$(".categories-slider").hasClass("slick-initialized")) {
        $(".categories-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 6,
          slideToScroll: 1,
          prevArrow: $(
            ".categories-slider-wrap .slider-navigation .slick-prev"
          ),
          nextArrow: $(
            ".categories-slider-wrap .slider-navigation .slick-next"
          ),
          responsive: [
            {
              breakpoint: 451,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
              },
            },
          ],
        });
      }
    } else {
      // Если ширина экрана 1024 пикселей или меньше, отключаем слайдер, если он активен.
      if ($(".categories-slider").hasClass("slick-initialized")) {
        $(".categories-slider").slick("unslick");
      }
    }
  }

  // Инициализация слайдера при загрузке страницы.
  initSlickSlider3();

  // При изменении размера окна браузера заново проверяем и инициализируем или отключаем слайдер.
  $(window).resize(function () {
    initSlickSlider3();
  });

  // $(".product-count .btn-minus").addClass("btn-disabled");

  $(".product-count .input-number").on("change", function () {
    if ($(this).val() == 0) {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
      $(this).closest(".product-count").addClass("hide");
      $(this).closest(".product-count").removeClass("show");
      $(this)
        .closest(".basket-btn-wrap")
        .find(".basket-btn")
        .removeClass("hide");
    } else {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) -
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number > 0 ? number : 0)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) +
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number)
      .change();
  });

  $(".basket-btn").on("click", function () {
    $(this).addClass("hide");
    $(this).closest(".basket-btn-wrap").find(".product-count").addClass("show");
  });
});
