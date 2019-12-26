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
  $(".bars__tab").removeClass("is-active");
  $(".bars__tab[data-target=" + $(this).attr("data-target") + "]").addClass("is-active");
  return false;
});
