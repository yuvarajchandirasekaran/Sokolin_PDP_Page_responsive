$(document).ready(function () {

  // for litter selection
  $('.litters').click(function () {
    $(".litters").removeClass('selected');
    $(this).addClass('selected');
  })

  // for quantity increase decrease functionality
  // increase
  $('#plus').click(function () {
    var input = $('#qty-count');
    var currentValue = parseInt(input.val());
    var newValue = currentValue + 1;

    input.val(newValue);
  });

  // decrease
  $('#minus').click(function () {
    var input = $('#qty-count');
    var currentValue = parseInt(input.val());

    if (currentValue > 1) {
      var newValue = currentValue - 1;
      input.val(newValue);
    }
  });


  // for wine detail accordian
  $(".accord-title").click(function () {
    $(this).toggleClass('opened')
    var target = $(this).data("target");
    $('.expand-cont[data-target="' + target + '"]').slideToggle();
    if ($('.arrow-icon[data-target="' + target + '"]').text() === 'expand_more') {
      $('.arrow-icon[data-target="' + target + '"]').text('expand_less');
    }
    else {
      $('.arrow-icon[data-target="' + target + '"]').text('expand_more');
    }
  });

  // for footer link toggle function
  $(".ftr-link-btn").click(function () {
    var target = $(this).data("target");
    $('.ftr-links[data-target="' + target + '"]').slideToggle();
    if ($('.plus-icon[data-target="' + target + '"]').text() === 'add') {
      $('.plus-icon[data-target="' + target + '"]').text('remove');
    }
    else {
      $('.plus-icon[data-target="' + target + '"]').text('add');
    }
  });

});



