(function($){'use strict';$.widget('icube.mobPdp',{_create:function(){this.initProductGallery();this.initPrice();this.initTab();},initProductGallery:function(){if($('.mob-product-image-gallery > li').length>1){$('.mob-product-image-gallery').bxSlider({pager:false,infiniteLoop:false,hideControlOnEnd:true});};},initPrice:function(){var disc=$('.product-view .product-shop .price-wrapper .label.sale');if(disc.length){disc.appendTo(disc.parent().find('.price-box .old-price'));};console.log($('.product-essential .regular-price .price, .product-essential .special-price .price'));$('.product-essential .regular-price .price, .product-essential .special-price .price').each(function(){var price=$(this).html();if(price.toLowerCase().indexOf('rp')>=0){price=price.replace('Rp','<span class="currency-code">Rp</span>');$(this).html(price);}});},initTab:function(){$('#collateral-tabs > dt').removeClass('current');$('#collateral-tabs > dd').removeClass('current');}});}(jQuery));