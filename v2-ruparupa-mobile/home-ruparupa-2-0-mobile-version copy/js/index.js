
    var swiper = new Swiper('.main-slider-banner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: false,
        loop: true,
    });
	var swiper2 = new Swiper('.inspiration-slider', {
        pagination: '.swiper-pagination2',
        slidesPerView: 5.5,
        paginationHide: true,
        spaceBetween: 16,
        freeMode: true,
		breakpoints: {
            1024: {
                slidesPerView: 5.5,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 16
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2.2,
                spaceBetween: 2.5
            }
        }
    });
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