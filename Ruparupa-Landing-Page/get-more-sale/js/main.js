window.jQuery(document).ready(function($){
	
	'use strict';
	
	//-------------------- jQuery smooth scrolling --------------------//
	
	$('a.smooth-scroll').on('click', function(event) {
		var $anchor		= $(this);
		var offsetTop	= '';
		var elemHeight	= parseInt($('#navigation').height() - 1, 0);
		
		if ($(document).width() >= 769) {
			offsetTop = parseInt($($anchor.attr('href')).offset().top - elemHeight, 0);
		} else {
			offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
		}
		
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 2000,'easeInOutExpo');
		
		event.preventDefault();
	});
	
	//-------------------- End jQuery smooth scrolling --------------------//
	
	
	
	//-------------------- Navigation menu scrollspy to anchor section --------------------//
	
	$('body').scrollspy({
		target: '#navigation .navbar-collapse',
		offset: parseInt($('#navigation').height(), 0)
	});
	
	//-------------------- End navigation menu scrollspy to anchor section --------------------//
	
	
	
	//-------------------- jQuery tooltips --------------------//
	
	$('.btn-tooltip').tooltip();
	$('.btn-popover').popover();
	
	//-------------------- End jQuery tooltips --------------------//
	
	
	
	//-------------------- Slider with Slick carousel --------------------//
	
	// Header slider
	$('#header .carousel-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		responsive: [{
			breakpoint: 767,
			settings: { draggable: true }
		}]
	});
	
	// Gallery slider
	$('.carousel-slider.gallery-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				draggable: true
			}
		}]
	});
	
	// General slider
	$('.carousel-slider.general-slider').each(function() {
		$(this).slick({
			adaptiveHeight: true,
			draggable: false,
			responsive: [{
				breakpoint: 767,
				settings: { draggable: true }
			}]
		});
	});
	
	//-------------------- End slider with Slick carousel --------------------//
	
	
	
	//-------------------- Preview images popup gallery with Fancybox --------------------//
	
	$('.fancybox').fancybox({
		loop: false	
	});
	
	//-------------------- End preview images popup gallery with Fancybox --------------------//
	
	
	
	//-------------------- jQuery placeholder for IE --------------------//
	
	$('input, textarea').placeholder();
	
	//-------------------- End jQuery placeholder for IE --------------------//
	
	
	
	//-------------------- Embed animation effects to html elements with CSS3 --------------------//
	
	var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
		
	$('.animation, .animation-visible').each(function() {
		var imagePos = $(this).offset().top;
		if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
	});
	
	$(window).scroll(function() {
		var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
		
		$('.animation, .animation-visible').each(function() {
			var imagePos = $(this).offset().top;
			if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
		});
	});
	
	$(window).resize(function() {
		$(window).scroll(function() {
			var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
			
			$('.animation, .animation-visible').each(function() {
				var imagePos = $(this).offset().top;
				if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
			});
		});
	});
	
	//-------------------- End embed animation effects to html elements with CSS3 --------------------//
	
	
	
	//-------------------- Parallax background effect with jQuery --------------------//
	
	$('.wrap-bg.wrap-bg-parallax').each(function() {
		var $bgobj	= $(this);
		var $img	= $bgobj.data('image-src');
		
		if ($img !== undefined && $img !== '') {
			$bgobj.css('background-image', 'url(' + $img + ')');
		}
		
		$(window).bind('scroll resize', function() {
			var yPos	= -(($(window).scrollTop() - $bgobj.offset().top) / 10);
			var coords	= '50% ' + yPos + 'px';
			
			if ($(document).width() >= 769) {
				$bgobj.css({ backgroundPosition: coords });
			} else {
				$bgobj.css({ backgroundPosition: 'center center' });
			}
		});
	});
	
	//-------------------- End parallax background effect with jQuery --------------------//
	
	
	
	//-------------------- Number ticker animation --------------------//
	
	$('.dotstheme_counter > h4').counterUp({
		delay: 10,
		time: 3000
	});
	
	//-------------------- End number ticker animation --------------------//
	
	
	
	//-------------------- Contact form submit process --------------------//
	
	$('.dotstheme-form-contact').submit(function() {
		var $form		= $(this);
		var submitData	= $form.serialize();
		var $email		= $form.find('input[name="email"]');
		var $name		= $form.find('input[name="name"]');
		var $message	= $form.find('textarea[name="message"]');
		var $submit		= $form.find('input[name="submit"]');
		var $dataStatus	= $form.find('.data-status');
		
		$email.attr('disabled', 'disabled');
		$name.attr('disabled', 'disabled');
		$message.attr('disabled', 'disabled');
		$submit.attr('disabled', 'disabled');
		
		$dataStatus.show().html('<div class="alert alert-info"><strong>Loading...</strong></div>');
		
		$.ajax({ // Send an offer process with AJAX
			type: 'POST',
			url: 'process-contact.php',
			data: submitData + '&action=add',
			dataType: 'html',
			success: function(msg){
				if (parseInt(msg, 0) !== 0) {
					var msg_split = msg.split('|');
					if (msg_split[0] === 'success') {
						$email.val('').removeAttr('disabled');
						$name.val('').removeAttr('disabled');
						$message.val('').removeAttr('disabled');
						$submit.removeAttr('disabled');
						$dataStatus.html(msg_split[1]).fadeIn();
					} else {
						$email.removeAttr('disabled');
						$name.removeAttr('disabled');
						$message.removeAttr('disabled');
						$submit.removeAttr('disabled');
						$dataStatus.html(msg_split[1]).fadeIn();
					}
				}
			}
		});
		
		return false;
	});
	
	//-------------------- End contact form submit process --------------------//

});
// ----PRIMAAPRIANSYAH---- //
jQuery(document).ready(function($){
	//define store some initial variables
	var	halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		//define a max rotation value (X and Y axises)
		maxRotationY = 5,
		maxRotationX = 3,
		aspectRatio;

	//detect if hero <img> has been loaded and evaluate its aspect-ratio
	$('.cd-floating-background').find('img').eq(0).load(function() {
		aspectRatio = $(this).width()/$(this).height();
  		if( $('html').hasClass('preserve-3d') ) initBackground();
	}).each(function() {
		//check if image was previously load - if yes, trigger load event
  		if(this.complete) $(this).load();
	});
	
	//detect mouse movement
	$('.cd-background-wrapper').each(function(){
		$(this).on('mousemove', function(event){
			var wrapperOffsetTop = $(this).offset().top;
			if( $('html').hasClass('preserve-3d') ) {
				window.requestAnimationFrame(function(){
					moveBackground(event, wrapperOffsetTop);
				});
			}
		});
	});

	//on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
	$(window).on('resize', function(){
		if( $('html').hasClass('preserve-3d') ) {
			window.requestAnimationFrame(function(){
				halfWindowH = $(window).height()*0.5,
				halfWindowW = $(window).width()*0.5;
				initBackground();
			});
		} else {
			$('.cd-background-wrapper').attr('style', '');
			$('.cd-floating-background').attr('style', '').removeClass('is-absolute');
		}
	});

	function initBackground() {
		var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
			proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
			newImageWidth = Math.ceil(halfWindowW*2*proportions),
			newImageHeight = Math.ceil(newImageWidth/aspectRatio),
			newLeft = halfWindowW - newImageWidth/2,
			newTop = (wrapperHeight - newImageHeight)/2;

		//set an height for the .cd-background-wrapper
		$('.cd-background-wrapper').css({
			'height' : wrapperHeight,
		});
		//set dimentions and position of the .cd-background-wrapper		
		$('.cd-floating-background').addClass('is-absolute').css({
			'left' : newLeft,
			'top' : newTop,
			'width' : newImageWidth,
		});
	}

	function moveBackground(event, topOffset) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			yPosition = event.pageY - topOffset,
			rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

		$('.cd-floating-background').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});

/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);

})();