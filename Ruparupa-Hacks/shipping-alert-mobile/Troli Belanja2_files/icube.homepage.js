(function($){'use strict';$.widget('icube.homepage',{_create:function(){this.initBannerSlider();this.initBrandsSlider();this.initFeaturedProducts();},initBannerSlider:function(){$('#section-banner-slider > ul').owlCarousel({singleItem:true,navigation:true,autoPlay:5000,transitionStyle:"fade",lazyLoad:true,afterInit:function(){$('#section-banner-slider > ul').css('visibility','visible');$('#section-banner-slider .owl-pagination').wrap('<div class="owl-pagination-wrapper"></div>');}});},initFeaturedProducts:function(){$('#section-featured_products .products-grid').bxSlider({minSlides:5,maxSlides:5,slideWidth:200,slideMargin:20,pager:false});},initBrandsSlider:function(){$('#section-brands #brands-slider').bxSlider({auto:true,onSliderLoad:function(){var wrapper=$('#section-brands .bx-wrapper');var controls=wrapper.find('.bx-controls');wrapper.prepend(controls);}});}});}(jQuery));