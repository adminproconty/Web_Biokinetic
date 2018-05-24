
/*-------------------------------------------------*/
/* =  PRELOADER
/*-------------------------------------------------*/

$(window).load(function() { 
  $("#preloader").fadeOut("slow"); 
});

/*-------------------------------------------------*/
/* =  NICE SCROLL
/*-------------------------------------------------*/

// $("html").niceScroll();  

$(document).ready( function () {
    

  /*-------------------------------------------------*/
  /* =  INIT WATERMARK
  /*-------------------------------------------------*/

  function initWatermark() {
      $.watermark.options = {
        className: 'input--placeholder',
        useNative: false
      };

      /*-------------------------------------------------*/
      /* =  INPUT PLACEHOLDER
      /*-------------------------------------------------*/

      $("[placeholder]").each(function() {
          $(this).watermark($(this).attr("placeholder"));
      });
      $("[type=password]").blur();
  }

  $('textarea').autosize();

  /*-------------------------------------------------*/
  /* =  link disabled
  /*-------------------------------------------------*/

  $('header ul li a').on("click", function(e){
    e.preventDefault();
  });

  var window_height = $(window).height() - 63;

  $('#subheader, #subheader #video').css('height', window_height  );

  //detect window resize
  $(window).on('resize', function() {
    var window_height = $(window).height() - 63;
    
    $('#subheader, #subheader #video').css('height', window_height  );
  }).trigger('resize');


  /*-------------------------------------------------*/
  /* =  scroll to top
  /*-------------------------------------------------*/

  var to_top_icon = $('#top');
    $(to_top_icon).hide();
      $(window).scroll(function(){
      if ($(this).scrollTop() > 475 ) {
      to_top_icon.fadeIn('slow');
      } else {
      to_top_icon.fadeOut('slow');
      }
  });

  /*-------------------------------------------------*/
  /* =  on resize run function
  /*-------------------------------------------------*/

  var tOut = false;
  var milSec = 500;
  $(window).resize(function(){
   if(tOut !== false)
      clearTimeout(tOut);
   tOut = setTimeout(rsizeItems, milSec);
  });
  function rsizeItems() { 
      //put code inside this function
  }

  

  /*-------------------------------------------------*/
  /* =  CONTACT FORM
  /*-------------------------------------------------*/


  var top_ofset = $('header').height() - 1;
  var word = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];
  var rand = (Math.floor(Math.random() * 4));
  var correct = word[rand];
   
   $('#test span').html(correct);
   $('input[name=rand]').click(function() {
      $('input[name=rand]').parent().removeClass('active1');
      $('input[name=rand]:checked').parent().addClass('active1');
   });
   $('#btn').click(function() {
       $('.popup-email').fadeOut('fast');
   });
   $('#contact-form').validate({
        rules: {
            name: "required",
			lastname: "required",
			phone: "required",
			date: "required",
			department: "required",
			mail: {
                required: true,
                email: true
            },
            message: "required"
        },
        submitHandler: function(form) {
            var user = $('input[name=rand]:checked').val();

            if(user === correct) {
                $.ajax({
                    url: 'form_data.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                      name: $('#name').val(),
                      lastname: $('#lastname').val(),
                      phone: $('#phone').val(),
                      number: $('#number').val(),
                      department: $('#e2').val(),
                      date: $('#date').val(),
                      mail: $('#mail').val(),
                      message: $('#message').val()
                    },
                    success: function(response) {
                        if(response.status === true) {
                            $('.element p').remove();
                            $('.element').prepend('<p class="success">' + response.msg + '</p>');
                            $('.popup-email').fadeIn('fast');
                            $('#name').prop('value', '');
                            $('#lastname').prop('value', '');
                            $('#phone').prop('value', '');
                            $('#number').prop('value', '');
                            $('#mail').prop('value', '');
                            $('#message').prop('value', '');
                            $('#date').prop('value', '');
                            $('#e2').prop('value', '0');
                            $('input[name=rand]:checked').parent().removeClass('active1');
                            $('input[name=rand]:checked').prop('checked', false);
                        } else {
                            $('.element p').remove();
                            $('.popup-email').fadeIn('fast');
                        }
                    }
                });
            } else {
                $('.popup-email').fadeIn('fast');
                $('.element p').remove();
            }
        }
    }); 

    /*-------------------------------------------------*/
    /* =  ADDS MOBILE BROWSER CLASS TO HTML TAG
    /*-------------------------------------------------*/

    var ua = navigator.userAgent.toLowerCase();
      function removeSpaces(ua) {
        return ua.split(' ').join('');
      }
    ua = removeSpaces(ua);
    var iOS = ua.match(/(iphone|ipod|ipad)/);
      if(iOS) {
        $('html').addClass('iOS');
      }

    /*-------------------------------------------------*/
    /* =  scroll page on click header links
    /*-------------------------------------------------*/

    $('.logo,header li a, .main-appoitment, .close, #top').smoothScroll({
      offset: - top_ofset,
      // one of 'top' or 'left'
      direction: 'top',
      // only use if you want to override default behavior
      scrollTarget: null,
      // fn(opts) function to be called before scrolling occurs.
      // `this` is the element(s) being scrolled
      beforeScroll: function() {},
      // fn(opts) function to be called after scrolling occurs.
      // `this` is the triggering element
      afterScroll: function() {},
      easing: 'easeInOutExpo',
      speed: 1000,
      // coefficient for "auto" speed
      autoCoefficent: 2,
      // $.fn.smoothScroll only: whether to prevent the default click action
      preventDefault: true      
    });

    $("#doctors #team .doct").click(function(e){
      e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#doctors").offset().top + 20
        }, 800);
    })

    /*-------------------------------------------------*/
    /* =  HEADER DROP-DOWN MENU
    /*-------------------------------------------------*/


    $('header span').on("click", function(){
      $(this).toggleClass('active').next().toggleClass('active');
    });

    $('header nav ul li a').on("click", function(e){
      e.preventDefault();
      $(this).parent().parent().parent().removeClass('active').removeClass('active');
      $('header span').removeClass('active').removeClass('active');
    })

    /*-------------------------------------------------*/
    /* =  DEPARTMENTS ELEMENTS ANIMATE
    /*-------------------------------------------------*/
    
    $('#departments').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('active');
      }
      // else {
      //   $(this).removeClass('active');
      // }
    });

    /*-------------------------------------------------*/
    /* =  ANIMATE NUMBERS
    /*-------------------------------------------------*/

    $('.numbers').one('inview', function(event, isInView, visiblePartX, visiblePartY){ 
      $('#lines1').animateNumber({ number: 8923},2000);

      $('#lines2').animateNumber({ number: 30 },2000);

      $('#lines3').animateNumber({ number: 22 },2000);

      $('#lines4').animateNumber({ number: 5 },2000);
    });


    /*-------------------------------------------------*/
    /* =  MAIN SLIDER
    /*-------------------------------------------------*/

    $('#main-slider').owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        items:1,
        autoplay:false,
        navigation: true,
        smartSpeed:250
    });

    $("#main-slider .item >img").each(function(i, elem) {
      var img = $(elem);
      var div = $("<div />").css({
        background: "url(" + img.attr("src") + ") no-repeat",
        width: img.width() + "px",
        height: img.height() + "px"
      });
      img.replaceWith(div);
      $(div).addClass('browse-images')
    });
    /*-------------------------------------------------*/
    /* =  ABOUT SLIDER
    /*-------------------------------------------------*/


    var owl = $("#about-slider");

    owl.owlCarousel({
      center: true, 
      loop:true,
      touchDrag:true,
      startPosition: 1,
      itemClass: 'owl-item',
      activeClass:  false,
      navigation : true,
      autoplay:true,
      smartSpeed:250,

      responsive : {
        // breakpoint from 0 up
        0 : {
            items:1,
        },
        // breakpoint from 480 up
        // 480 : {
        //     items:2,
        // },
        // breakpoint from 768 up
        768 : {
            items:3,
        }
    }
       
    });


    /*-------------------------------------------------*/
    /* =  DATE PICKER
    /*-------------------------------------------------*/

    $( "#date" ).datepicker();
 
    /*-------------------------------------------------*/
    /* =  DESCRIPTION SLIDER
    /*-------------------------------------------------*/

    $(".rslides").responsiveSlides({
      auto: true,
      pager: false,
      nav: false,
      speed: 400
    });

    /*-------------------------------------------------*/
    /* =  ABOUT DOCTORS POPUP
    /*-------------------------------------------------*/

    $('.doct').on("click", function() {
       var id = $(this).prop('id');
       $('.about-doc').removeClass('active');
       $('.'+id).addClass('active');
    });

    $('.close').on('click', function(){
        $(this).parent('div').removeClass('active');
    });

    /*-------------------------------------------------*/
    /* =  FILTER MIXIT UP
    /*-------------------------------------------------*/

    $('#grid').mixitup({
      targetSelector: '.mix',
      filterSelector: '.filter',
      sortSelector: '.sort',
      buttonEvent: 'click',
      effects: ['fade','scale ',' blur','grayscale'],
      listEffects: null,
      easing: 'windup',
      layoutMode: 'grid',
      targetDisplayGrid: 'inline-block',
      targetDisplayList: 'block',
      gridClass: '',
      listClass: '',
      transitionSpeed: 600,
      showOnLoad: 'all',
      sortOnLoad: false,
      multiFilter: false,
      filterLogic: 'or',
      resizeContainer: true,
      minHeight: 0,
      failClass: 'fail',
      perspectiveDistance: '3000',
      perspectiveOrigin: '50% 50%',
      animateGridList: true,
      onMixLoad: null,
      onMixStart: null,
      onMixEnd: null

    }); 
    
    $(' .da-thumbs .mix ').each( function() { $(this).hoverdir(); 

    });

    /*-------------------------------------------------*/
    /* =  MAGNIFIC POPUP
    /*-------------------------------------------------*/

    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      fixedContentPos:"auto",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });

    $('.popup-youtube, .popup-vimeo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: true
    }) ;

    /*-------------------------------------------------*/
    /* =  SELECT2
    /*-------------------------------------------------*/

    $("#e2").select2({placeholder:"CHOSE DEPARTMENT"}).on("select2-loaded", function(e) {
        $(".select2-results").niceScroll();
        // $(".select2-results").mCustomScrollbar({
        //   autoScrollOnFocus:true,
        //   enable:true
        // });
    });

    /*-------------------------------------------------*/
    /* =  SHOW END HIDE ADDRESS
    /*-------------------------------------------------*/
    
    // $(".place").hover(function () {
    //     $(".show").toggleClass("active");
    //  });
    $(".place").on('mouseover',function(){
        $(".show").toggleClass("active");
    });
    $(".place").on('mouseout',function(){
        $(".show").toggleClass("active");
    });

    /*-------------------------------------------------*/
    /* =  PARALLAX
    /*-------------------------------------------------*/

    $('#departments,#description,#hippocrate').parallax({
      speed : 0.15 
    });



    if($(window).width() <= 760) $('.mightyslider_carouselModern_skin').prop('id', 'mobile');
    else $('.mightyslider_carouselModern_skin').prop('id', 'showcase');

    $(window).resize(function() {
      if($(window).width() <= 760) $('.mightyslider_carouselModern_skin').prop('id', 'mobile');
      else $('.mightyslider_carouselModern_skin').prop('id', 'showcase');


    });

});

