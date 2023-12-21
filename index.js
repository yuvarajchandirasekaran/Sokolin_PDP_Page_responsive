// 1. cart detail view
$(document).ready(function () {
  $('.cart-icon').click(function (e) {
    e.stopPropagation(); // Prevent the click event from reaching the document
    $('.cart-detail-container').slideToggle();
  });

  $('.close-icon').click(function () {
    $('.cart-detail-container').slideToggle();
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.cart-detail-container').length &&
      !$(e.target).hasClass('cart-icon')) {
      // Close the cart detail container if the click is outside and not on the cart icon
      $('.cart-detail-container').slideUp();
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
  // $(".accord-title").click(function () {
  //   $(this).toggleClass('opened')
  //   var target = $(this).data("target");
  //   $('.expand-cont[data-target="' + target + '"]').slideToggle();
  //   if ($('.arrow-icon[data-target="' + target + '"]').text() === 'expand_more') {
  //     $('.arrow-icon[data-target="' + target + '"]').text('expand_less');
  //   }
  //   else {
  //     $('.arrow-icon[data-target="' + target + '"]').text('expand_more');
  //   }
  // });
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

  // $(document).ready(function () {
  //   $('.tab-btn').click(function () {
  //     const tabId = $(this).data('tab-btn');

  //     // Remove 'active' class from all tabs
  //     $('.tab-btn').removeClass('active');
  //     $(this).addClass('active');

  //     // Hide all tab contents
  //     $('.content').hide();

  //     // Display the clicked tab content
  //     $('#' + tabId).css('display', 'none');
  //   });
  // });


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
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // 12. scroll to the top when button is clicked
  document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    scrollToTop();
  });

  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8); // Adjust the divisor for speed
    }
  };

  // 13.remove cart products
  $('.cart-del-btn').click(function () {
    // Find the parent element with class 'prod-detail' and hide it
    $(this).parent('.prod-detail').css('display', 'none');
  });
});