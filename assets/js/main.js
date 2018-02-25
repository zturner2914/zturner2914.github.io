$(function() {
var $win = $(window);
var $doc = $(document);
var lastScrollTop = 0;
var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


  $('.mobile-menu').click(function() {
    $('nav ul').slideToggle();
  });


  // Window Srollling Event
  $(window).scroll(function(event){
     sPos = $(document).scrollTop();

     var st = $(this).scrollTop();
     if (st > lastScrollTop && sPos>100){
         // downscroll code
        $('header').addClass('min-head');
     } else {
        // upscroll code
        if(st + $(window).height() < $(document).height()) {
           $('header').removeClass('min-head').addClass('nav-down');
       }
     }
      lastScrollTop = st;
  });

  $win.scroll(function(event) {
  		var screenTop = $doc.scrollTop();

      $('.scroll-in').each(function(i, el) {
        var el = $(el);
        var elTop = el.offset().top;
        var elTopReal = elTop - screenTop;
        if (el.visible(true)) {
          el.addClass("come-in");
        }else if(elTopReal>winHeight){
          el.removeClass("come-in");
        }
      });
      currScrollTop = screenTop;
  	});

    $(".work-pieces").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible");
      }
    });

});
