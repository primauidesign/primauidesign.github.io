/*-------------------------------------------------------------------------------------------------------------------------------*/
/*This is main JS file that contains custom style rules used in this template*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* Template Name: Site Title*/
/* Version: 1.0 Initial Release*/
/* Build Date: 22-04-2015*/
/* Author: Unbranded*/
/* Website: http://moonart.net.ua/site/ 
/* Copyright: (C) 2015 */
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/*-------------------------------------------------------------------------------------------------------------------------------*/

jQuery(function($) {

	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, winScr, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
		if($('.menu-button').is(':visible')) _isresponsive = true;
		else _isresponsive = false;
	}

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	pageCalculations();	

	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).load(function(){
		$('#loader-wrapper').fadeOut();
		initSwiper();
	});

	/*==============================*/
	/* 05 - function on page scroll */
	/*==============================*/	
	$(window).on("scroll", function() {
		winScr = $(window).scrollTop();
		stickHeader();
	});		

	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	function resizeCall(){
		pageCalculations();

		$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
			var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this), slidesPerViewVar = updateSlidesPerView($t);
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.reInit();
			var paginationSpan = $t.find('.pagination span');
			var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
			if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
			else $t.removeClass('pagination-hidden');
			paginationSlice.show();
		});
	}
	if(!_ismobile){
		$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}

	/*=====================*/
	/* 07 - swiper sliders */
	/*=====================*/
	function initSwiper(){
		var initIterator = 0;
		$('.swiper-container').each(function(){								  
			var $t = $(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index + ' initialized').attr('id', index);
			$t.find('.pagination').addClass('pagination-'+index);

			var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
			var centerVar = parseInt($t.attr('data-center'),10);
			var simVar = ($t.closest('.circle-description-slide-box').length)?false:true;

			var slidesPerViewVar = $t.attr('data-slides-per-view');
			if(slidesPerViewVar == 'responsive'){
				slidesPerViewVar = updateSlidesPerView($t);
			}
			else if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			var loopVar = parseInt($t.attr('data-loop'),10);
			var speedVar = parseInt($t.attr('data-speed'),10);

			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				speed: speedVar,
				pagination: '.pagination-'+index,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				keyboardControl: true,
				calculateHeight: true, 
				simulateTouch: simVar,
				centeredSlides: centerVar,
				roundLengths: true,
				onSlideChangeEnd: function(swiper){
					var activeIndex = (loopVar===true)?swiper.activeIndex:swiper.activeLoopIndex;
					var qVal = $t.find('.swiper-slide-active').attr('data-val');
					$t.find('.swiper-slide[data-val="'+qVal+'"]').addClass('active');
				},
				onSlideChangeStart: function(swiper){
					$t.find('.swiper-slide.active').removeClass('active');
				},
				onSlideClick: function(swiper){

				}
			});
			swipers['swiper-'+index].reInit();
			if($t.attr('data-slides-per-view')=='responsive'){
				var paginationSpan = $t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
				if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
				else $t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
			initIterator++;
		});

	}

	function updateSlidesPerView(swiperContainer){
		if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
		else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
		else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
		else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
		else return parseInt(swiperContainer.attr('data-xs-slides'),10);
	}

	//swiper arrows
	$('.swiper-arrow-left').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipePrev();
	});

	$('.swiper-arrow-right').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipeNext();
	});

	//swiper arrows
	$('.custom-arrow-left').on('click', function(){
		swipers['swiper-'+$(this).closest('.tt-custom-arrows').find('.swiper-container').attr('id')].swipePrev();
	});
	$('.custom-arrow-right').on('click', function(){
		swipers['swiper-'+$(this).closest('.tt-custom-arrows').find('.swiper-container').attr('id')].swipeNext();
	});	

	/*==============================*/
	/* 08 - buttons, clicks, hovers */
	/*==============================*/

	function stickHeader(){
		if (winScr > 0){
			$(".tt-header").addClass("stick");
		} else {
			$(".tt-header").removeClass("stick");
		}
		if($(".tt-header-banner").length){
			var bannerH = $(".tt-header-banner").height();
			if (winScr > bannerH){
				$(".tt-header").addClass("move");
			} else{
				$(".tt-header").removeClass("move");
			}
		}
	}

	/*mobile menu*/
    $('.cmn-mobile-switch,.tt-mobile-close,.tt-mobile-overlay').on('click', function(e){
    	$('.tt-mobile-overlay').toggleClass('active');
    	$('#content-wrapper').toggleClass('active');
		$('.tt-mobile-block').toggleClass('active');
		e.preventDefault();
	});
	$('.tt-mobile-nav .menu-toggle').on('click', function(e){
		$(this).closest('li').addClass('select').siblings('.select').removeClass('select');
		$(this).closest('li').siblings('.parent').find('ul').slideUp();
		$(this).parent().siblings('ul').slideToggle();
		e.preventDefault();
	});	

	/*search popup*/
    $('.tt-s-popup-btn').on('click', function(e){
		$('.tt-s-popup').addClass('open');
		e.preventDefault();
	});
	$('.tt-s-popup-close, .tt-s-popup-layer').on('click', function(e){
		$('.tt-s-popup').removeClass('open');
		e.preventDefault();
	});

	/*tt-thumb*/
	$('.tt-thumb').on('click', function(e){
		var img = $(this).attr('href');
		$('.tt-thumb-popup-img').attr('src',img);
		$('.tt-thumb-popup').addClass('active');
		e.preventDefault();
	});
	$('.tt-thumb-popup-close, .tt-thumb-popup-layer').on('click', function(e){
		$('.tt-thumb-popup').removeClass('active');
		e.preventDefault();
	});

	/*tt-video*/
	$(document).on('click', '.tt-video-open', function(e){
		e.preventDefault();
		var video = $(this).attr('href');
		$('.tt-video-popup-container iframe').attr('src',video);
		$('.tt-video-popup').addClass('active');
		
	});
	$('.tt-video-popup-close, .tt-video-popup-layer').on('click', function(e){
		$('.tt-video-popup').removeClass('active');
		$('.tt-video-popup-container iframe').attr('src','about:blank')
		e.preventDefault();
	});			


	/*==================================================*/
	/* 09 - form elements - checkboxes and radiobuttons */
	/*==================================================*/
	
	//Tabs
	var tabFinish = 0;
	$('.tt-nav-tab-item').on('click',function(e){
	    var $t = $(this);
	    if(tabFinish || $t.hasClass('active')) e.preventDefault();
	    tabFinish = 1;
	    $t.closest('.tt-nav-tab').find('.tt-nav-tab-item').removeClass('active');
	    $t.addClass('active');
	    var index = $t.parent().parent().find('.tt-nav-tab-item').index(this);
	    $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function(){
	        $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index).fadeIn(500, function() {
	            tabFinish = 0;           
	        });
	    });
	});

	//Tabs
	var megaFinish = 0;
	$(".tt-mega-list li").on({
	    mouseenter: function () {
	    	var $t = $(this);
	    	if(megaFinish || $t.hasClass('active')) e.preventDefault();
	    	megaFinish = 1;
	    	$t.siblings('.active').removeClass('active');
	    	$t.addClass('active');
	    	var index = $t.parent().parent().find('.tt-mega-list li').index(this);
		    $t.closest('.tt-mega-wrapper').find('.tt-mega-entry.active').fadeOut(200, function(){
		    	$(this).removeClass('active');
		        $t.closest('.tt-mega-wrapper').find('.tt-mega-entry').eq(index).fadeIn(200, function() {
		            megaFinish = 0;
		            $(this).addClass('active');
		        });
		    });	    	
	    },
	    mouseleave: function () {
	    }
	});


});