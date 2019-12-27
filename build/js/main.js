//тогл секции
$(document).on('click', '.js-section-opener', function () {
  $(this).toggleClass('is-open');
  $(this).parent('.section').find('.section__inner').slideToggle();
  return false;
});

//тогл подсекции
$(document).on('click', '.js-subsection-opener', function () {
  $(this).toggleClass('is-open');
  $(this).parent('.subsection').toggleClass('is-open');
  $(this).parent('.subsection').find('.subsection__inner').slideToggle();
  return false;
});

//переключение графиков
$(".js-performance-type a").click(function () {
  $(".js-performance-type a").removeClass("is-active");
  $(this).addClass("is-active");
  $(".bars__tab").removeClass("is-open");
  $(".bars__tab[data-target=" + $(this).attr("data-target") + "]").addClass("is-open");
  return false;
});

//переключение brige
$(document).on('click', '.js-brige-button', function () {
  $(this).parent('.brige').find('.js-brige-button').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

//переключение табов в подсекции
$(".js-tabs a").click(function () {
  var parent = $(this).closest(".subsection__inner");
  $(".js-tabs a").removeClass("is-active");
  $(this).addClass("is-active");
  parent.find(".tab").removeClass("is-open");
  $(".tab[data-target=" + $(this).attr("data-target") + "]").addClass("is-open");
  return false;
});

var back = document.querySelector('.js-back');

function popupClose() {
  $('body').removeClass('overflow');
  $('.popup').removeClass('is-open');
  $('.footer').removeClass('footer--config_open');
  back.removeEventListener('click', popupClose);
}

//окрытие попапа с описанием
$(document).on('click', '.js-more', function () {
  $('body').addClass('overflow');
  $('#'+ $(this).attr('data-target')).addClass('is-open');
  back.addEventListener('click', popupClose);
  return false;
});

//сохранение конфигурации
$(document).on('click', '.js-save', function () {
  popupClose();
  $('body').addClass('overflow');
  $('#config').addClass('is-open');
  $('.footer').addClass('footer--config_open');
  back.addEventListener('click', popupClose);
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  popupClose();
  return false;
});

//попап с графиками
$(document).on('click', '.js-graphs', function () {
  popupClose();
  $('body').addClass('overflow');
  $('#graphs').addClass('is-open');
  back.addEventListener('click', popupClose);
  return false;
});
