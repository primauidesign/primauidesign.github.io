(function($){'use strict';$.extend(true,$.icube.pdp.prototype,{initUpsellSlider:function(){$('#upsell-product-table').bxSlider({minSlides:2,maxSlides:3,slideWidth:200,slideMargin:10,infiniteLoop:false,pager:false});},initRelatedSlider:function(){$('#related-product-table').bxSlider({minSlides:2,maxSlides:3,slideWidth:200,slideMargin:10,infiniteLoop:false,pager:false});},initRecentViewedSlider:function(){$('#recently-viewed-items').bxSlider({minSlides:2,maxSlides:3,slideWidth:200,slideMargin:10,infiniteLoop:false,pager:false});},});}(jQuery));