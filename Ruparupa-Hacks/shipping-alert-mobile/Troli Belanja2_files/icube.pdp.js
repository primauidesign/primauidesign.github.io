(function($){'use strict';$.widget('icube.pdp',{_create:function(){this.initGallerySlider();this.initUpsellSlider();this.initRelatedSlider();this.initRecentViewedSlider();this.initPickUpStore();this.initCollateralTabs();this.initDesc();this.initReviews();},initGallerySlider:function(){$('.product-img-box .more-views .product-image-thumbs').bxSlider({minSlides:4,maxSlides:4,slideWidth:60,slideMargin:10,pager:false,infiniteLoop:false,hideControlOnEnd:true});},initUpsellSlider:function(){$('#upsell-product-table').bxSlider({minSlides:5,maxSlides:5,slideWidth:200,slideMargin:20,pager:false});},initRelatedSlider:function(){$('#related-product-table').bxSlider({minSlides:5,maxSlides:5,slideWidth:200,slideMargin:20,pager:false});},initRecentViewedSlider:function(){$('#recently-viewed-items').bxSlider({minSlides:5,maxSlides:5,slideWidth:200,slideMargin:20,pager:false});},initProductOptions:function(){},initPickUpStore:function(){$j('.pickup-store > span').click(function(){var storeList=$j('.pickup-store > div.bopis-box');var storeListMobile=$j('.pickup-store > ul');if(!storeList.is(':visible')){storeList.show();}else{storeList.fadeOut();}if(!storeListMobile.is(':visible')){storeListMobile.show();}else{storeListMobile.fadeOut();}}).mouseleave(function(){var item=this;setTimeout(function(){if(!$j('.pickup-store > div.bopis-box').is(':hover')&&!$j('.pickup-store > span').is(':hover')){$j('.pickup-store > div.bopis-box').fadeOut();};if(!$j('.pickup-store > ul').is(':hover')&&!$j('.pickup-store > span').is(':hover')){$j('.pickup-store > ul').fadeOut();};},100);});$j('.pickup-store > div.bopis-box').mouseleave(function(){var item=this;setTimeout(function(){if(!$j('.pickup-store > div.bopis-box').is(':hover')&&!$j('.pickup-store > span').is(':hover')){$j('.pickup-store > div.bopis-box').fadeOut();};},100);});$j('.pickup-store > ul').mouseleave(function(){var item=this;setTimeout(function(){if(!$j('.pickup-store > ul').is(':hover')&&!$j('.pickup-store > span').is(':hover')){$j('.pickup-store > ul').fadeOut();};},100);});},initCollateralTabs:function(){var _this=this;$('#collateral-tabs .tab-container .tab-content').each(function(i){if(_this._isEmpty($(this))){var _i=i+1;$(this).parent().prev().hide();$(this).closest('.product-collateral').find('.toggle-tabs li:nth-child('+_i+')').hide();};})},_isEmpty:function(el){return!$.trim(el.html())},initDesc:function(){$('.description .see-more').click(function(){$('.product-collateral .toggle-tabs > li:nth-child(2)').click();_helper.scrollToElm($('.product-collateral'));});},initReviews:function(){$('.product-view .ratings .amount > a').click(function(e){$('#collateral-tabs dt.reviews').click();if($('#customer-reviews .review-list').length){_helper.scrollToElm($('#customer-reviews .review-list'));}else{_helper.scrollToElm($('.product-collateral'));}})
$('#customer-reviews .no-rating a').click(function(e){e.preventDefault();$('#collateral-tabs dt.reviews').click();_helper.scrollToElm($('.product-collateral'));})}});}(jQuery));