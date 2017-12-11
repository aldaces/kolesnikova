$(function() {
    //smooth scroll
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
    
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    //slider
	$('.slick-slider').slick({
		autoplay: true
    });
    //gallery
	$('#js-grid-masonry').cubeportfolio({
        filters: '#js-filters-masonry',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 10,
                gapVertical: 10,
            }
        }],
        caption: 'opacity',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

    // $('.multiple-items').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 3
    //   });

    $('.multiple-items').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        centerPadding: '8%',
        infinite: true,
        autoplay: true,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                 $('#toTop').fadeOut();
                }
        });
       $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800); 
        }); 
    });
});
