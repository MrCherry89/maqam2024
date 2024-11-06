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

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-99-99",
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(
    ".authorization-form, .registration-form, .registration-supiller-form, .registration-expert-form, .confirm-form"
  ).validate({
    errorPlacement: function (error, element) {},
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

  $(".subscriptions-table-items .show").on("click", function () {
    $(".subscriptions-table-item").removeClass("hide");
    $(this).hide();
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

  $(".tabs-stage > div").hide();
  $(".tabs-stage > div:first").show();
  $(".tabs-stage > div:first").addClass("active");
  $(".tabs-nav li:first").addClass("tab-active");

  // condition for tab click
  $(".tabs-nav a").on("click", function (event) {
    event.preventDefault();
    $(".tabs-nav li").removeClass("tab-active");
    $(this).parent().addClass("tab-active");
    $(".tabs-stage > div").hide();
    $(".tabs-stage > div").removeClass("active");
    $($(this).attr("href")).addClass("active");
    $($(this).attr("href")).fadeIn();
  });

  $(".catalog-info .show").on("click", function () {
    $(this).closest(".catalog-info").find(".goods-item").removeClass("hide");
    $(this).hide();
  });

  $(".filter-info .info-top").on("click", function () {
    $(this).closest(".filter-info").find(".info-item").toggleClass("hide");
    $(this).closest(".filter-info").find(".checkboxes").toggleClass("hide");
    $(this).find("img").toggleClass("rotate");
  });

  $(".filter-info .info-bottom .top-item .icon").on("click", function () {
    $(this).closest(".info-bottom").find(".top-item-wrap").toggleClass("hide");
    $(this)
      .closest(".info-bottom")
      .find(".top-item .icon img")
      .toggleClass("rotate");
  });

  $(".list li .icon").on("click", function () {
    $(this).closest("li").find(".list2").toggleClass("hide");
    $(this).closest("li").find(".icon img").toggleClass("rotate");
  });

  const range = document.querySelectorAll(".range-slider span input");
  progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        progress.style.left = (minRange / range[0].max) * 100 + "%";
        progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: ".slider-nav",
    prevArrow: $(".details-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".details-slider-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  $(".share-btn").on("click", function (e) {
    e.stopPropagation();
    $(".share-content").removeClass("show");
    $(".share").removeClass("z");
    $(this).closest(".share").addClass("z");
    $(this).closest(".share").find(".share-content").toggleClass("show");
  });

  $(document).on("click", function () {
    $(".share-content").removeClass("show");
  });

  $(".share-content").on("click", function (e) {
    e.stopPropagation();
  });

  $(".product-selector").select2({
    templateResult: formatOption,
  });

  function formatOption(state) {
    if (!state.id) {
      return state.text;
    }

    var $state = $(
      "<span>" +
        state.text +
        ' <button class="apply-data-btn" data-value="' +
        state.id +
        '">Применить данные</button></span>'
    );
    return $state;
  }

  $(document).on("click", ".apply-data-btn", function (e) {
    e.stopPropagation();
    var value = $(this).data("value");
    alert("Applying data for: " + value);
    // Add your logic here to apply the selected product data
  });

  $(".apply form input").on("input", function () {
    $(this).closest(".apply").find(".hide-block").addClass("show");

    // Проверяем, если поле пустое, убираем класс 'show'
    if ($(this).val().length === 0) {
      $(this).closest(".apply").find(".hide-block").removeClass("show");
    }
  });

  $(".apply .hide-block .item .add").on("click", function () {
    let inputText = $(this).closest(".item").find("span").text();
    $(this).closest(".apply").find("form input").val(inputText);
    $(this).closest(".apply").find(".hide-block").toggleClass("show");
  });

  $(document).on("click", ".apply-data-btn", function (e) {
    e.stopPropagation();
    var value = $(this).data("value");
    alert("Applying data for: " + value);
    // Add your logic here to apply the selected product data
  });

  $(".search form input").on("input", function () {
    $(this).closest(".search").find(".hide-block").addClass("show");

    // Проверяем, если поле пустое, убираем класс 'show'
    if ($(this).val().length === 0) {
      $(this).closest(".search").find(".hide-block").removeClass("show");
    }
  });

  $(".search .hide-block .item .add").on("click", function () {
    let inputText = $(this).closest(".item").find("span").text();
    $(this).closest(".search").find("form input").val(inputText);
    $(this).closest(".search").find(".hide-block").toggleClass("show");
  });

  $("#categories-popup .info-item .div1 .top").on("click", function () {
    $(this).closest(".info-item").find(".div2").addClass("show");
    $(this).addClass("active");
  });
  $("#categories-popup .info-item .div2 .top").on("click", function () {
    $(this).closest(".info-item").find(".div3").addClass("show");
    $(this).addClass("active");
  });
});
