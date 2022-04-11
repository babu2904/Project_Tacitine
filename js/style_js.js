	$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}









  $(document).ready(function() {

               
			$("#owl-demo1").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 1,
          //singleItem :true,
		  navigation:true,
		  navigationText : false,
		  pagination : true,
		  lazyLoad:true,
            slideSpeed : 1000,
            paginationSpeed : 1000,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
            itemsDesktop: [1199,1],
          itemsDesktopSmall: [979,1],
          itemsTablet: [768,1],
          itemsMobile:[767,1],
      });


  });


 $(document).ready(function() {

               
            $("#owl-demo2").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 4,
          //singleItem :true,
          navigation:true,
          navigationText : false,
          pagination : true,
          lazyLoad:true,
            slideSpeed : 1500,
            paginationSpeed : 1500,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
      });


  });

$(document).ready(function() {

               
            $("#owl-demo3").owlCarousel({
          autoPlay:5000, //Set AutoPlay to 3 seconds
          items: 2,
          //singleItem :true,
          navigation:true,
          navigationText : false,
          pagination : true,
          lazyLoad:true,
            slideSpeed : 1500,
            paginationSpeed : 1500,
            //singleItem : true,
            rewindNav : true,
            rewindSpeed: 1000,
             itemsDesktop: [1199,2],
            itemsDesktopSmall: [979,2],
            itemsTablet: [768,2],
            itemsMobile:[767,1],
      });


  });




/*$(document).ready(function () {

        if ($(this).scrollTop() > 100) {
    $(window).scroll(function () {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});*/


