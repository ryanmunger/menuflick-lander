(function(jQuery) {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('[href="#top"]').hide();

  var step1 = $('#step-1').offset().top,
    step2 = $('#step-2').offset().top,
    top = $('#top').offset().top,
    $window = $(window);

  $window.scroll(function() {
      if ( $window.scrollTop() >= step1 ) {
        $('[href="#top"]').fadeIn();
        $('.down-arrow').attr('href', '#step-2');
        $('.up-arrow').attr('href', '#top');
      } else if ( $window.scrollTop() >= step2 ) {
        $('.up-arrow').attr('href', '#step-1');
        $('.down-arrow').attr('href', '#step-3');
      } else if ($window.scrollTop() >= top) {
        $('[href="#top"]').fadeOut();
        $('.down-arrow').attr('href', '#step-1');
      } else if ($window.scrollTop() >= step3) {
      }
  });
  window.mySwipe = Swipe(document.getElementById('slider'));
})($);
