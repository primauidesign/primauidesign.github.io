//Navbar Scroll Event
//var lastScrollTop = 0;
//var navbar        = $('.navbar');
//$(window).scroll(function(event){
//   var st = $(this).scrollTop();
//   if (st > lastScrollTop){
//       navbar.addClass('navbar-scroll-custom');
//   } else {
//      navbar.removeClass('navbar-scroll-custom');
//   }
//   lastScrollTop = st;
//});

var swiper3 = new Swiper('.people-choice-product', {
        pagination: '.swiper-pagination3',
        slidesPerView: 5.5,
        paginationHide: true,
        spaceBetween: 16,
        freeMode: true,
		breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 1
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 1
            },
            320: {
                slidesPerView: 2.2,
                spaceBetween: 2
            }
        }
    });