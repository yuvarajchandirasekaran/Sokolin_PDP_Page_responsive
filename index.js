// 1. cart detail view
$(document).ready(function () {

  $('.cart-icon').click(function (e) {
    e.stopPropagation(); // Prevent the click event from reaching the document
    $('.cart-detail-container').css('right', '3px') // Show cart items with animation from right to left
  });

  $('.close-icon').click(function () {
    $('.cart-detail-container').css('right', '-350px') // Show cart items with animation from right to left
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.cart-detail-container').length && !$(e.target).hasClass('cart-icon')) {
      $('.cart-detail-container').css('right', '-350px') // Show cart items with animation from right to left
    }
  });

  // ----------------------------------

  // 2.whistlist add
  $('.add-fav-btn').click(function () {
    $(this).toggleClass('add-fav')
    console.log($(this));
  })
  // ----------------------------------

  //3. for litter selection
  $('.litters').click(function () {
    $(".litters").removeClass('selected');
    $(this).addClass('selected');
  })
  // ----------------------------------

  // 4.for quantity increase decrease functionality
  // increase
  $('#plus').click(function () {
    var input = $('#qty-count');
    var currentValue = parseInt(input.val());
    if (currentValue < 30) {
      var newValue = currentValue + 1;
      input.val(newValue);
    }
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
  // ----------------------------------

  // 5.show more and less finction
  var maxLength = 280;
  var content = $('.read-more-content p');
  var contentText = content.text();

  if (contentText.length > maxLength) {
    var trimmedText = contentText.substr(0, maxLength);
    content.html(trimmedText + '<span class="dots">...</span><span class="read-more-content-hidden">' + contentText.substr(maxLength) + '</span>');
    $('.read-more-content-hidden').hide();

  }
  else {
    $(this).find('.dots').hide(); // Hide dots if content is shorter than maxLength
    $('.see-detail-btn').hide()
  }

  $('.see-detail-btn').on('click', function () {
    var hiddenContent = $('.read-more-content-hidden');
    var dots = $('.dots');

    if (dots.is(':visible')) {
      dots.hide();
      hiddenContent.show();
      $(this).text('>READ LESS');
    } else {
      dots.show();
      hiddenContent.hide();
      $(this).text('>READ MORE');
    }
  });
  // ----------------------------------

  // 6.for wine detail accordian

  $(".accord-title").click(function () {
    var target = $(this).data("target");

    if (!$(this).hasClass('opened')) {
      // Close all other open content areas
      $('.expand-cont').slideUp();
      $('.accord-title').removeClass('opened');
      $('.arrow-icon').text('expand_more');

      // Open the clicked content area
      $('.expand-cont[data-target="' + target + '"]').slideDown();
      $('.arrow-icon[data-target="' + target + '"]').text('expand_less');
      $(this).addClass('opened');
    }
    else {
      // If the clicked section is already open, close it
      $('.expand-cont[data-target="' + target + '"]').slideUp();
      $('.arrow-icon[data-target="' + target + '"]').text('expand_more');
      $(this).removeClass('opened');
    }
  });

  // ----------------------------------

  // 7.tab functionality
  $(document).ready(function () {
    $('.tab').click(function () {
      const tabId = $(this).data('id');

      // Remove 'active' class from all tabs
      $('.tab').removeClass('active');
      $(this).addClass('active');

      // Hide all tab contents
      $('.tab-content').hide();

      // Display the clicked tab content
      $('#' + tabId).show();
    });
  });

  // ----------------------------------

  //8. for footer link toggle function
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
  // ----------------------------------

  // 9.cart count increase when the cart btn is clicked
  $('.add-cart-btn').click(function () {
    var inputValue = parseInt($('#qty-count').val())
    var cart = parseInt($('.cart-count').text())
    var sum = inputValue + cart;
    $('.cart-count').text(sum);
  });


  // --------------------------------------

  // 10.tab view menu link
  $('.hamburg-icon').click(function () {
    $('.nav-links').toggle()
  })
  // ----------------------------------

  // 11.Show scroll-to-top button when user scrolls down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });
  $(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000"); return false }) })

  // 12.remove cart products
  $('.cart-del-btn').click(function () {
    // Find the parent element with class 'prod-detail' and hide it
    $(this).parent('.prod-detail').css('display', 'none');
  });


  // 13.share pop up functionality

  $(document).ready(function (e) {
    $('.share-btn').click(function (e) {
      e.stopPropagation(); // Prevent the click event from propagating to the document
      $('.share-pop-up').css('display', 'block');
      document.body.style.overflow = 'hidden';
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.share-platforms').length) {
        $('.share-pop-up').css('display', 'none');
        document.body.style.overflow = 'auto';

      }
    });
  });

});


$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });

  if(typeof owlCarousel === 'function') {
    $("#owl-demo").owlCarousel({
      navigation : true
    });
  }

});