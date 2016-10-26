(function($) {

    "use strict";

    function toogleMenuPro_4_8356() {
        var $ = jQuery;
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-4_8356");
        var container = $("#toogle_menu_4_8356");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            if ((wi <= 767 || isPhone == true)) {
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Toggle menuleft */
    function toogleMenuPro_13_2552() {
        var $ = jQuery;
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-13_2552");
        var container = $("#toogle_menu_13_2552");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0){
            if ((wi <= 767 || isPhone == true)){
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Toolbar Language */
    function emHoverUlLanguage() {
        if (!isMobile) {
            var sLan = $('#em-hoverUl-language');
            var len = sLan.length;
            if (len) {
                sLan.insertUlLanguage();
                sLan.selectUl();
            }
        }
    }
    /* Toolbar Currency */
    function emHoverUlCurrency() {
        if (!isMobile) {
            var sCur = $('#em-hoverUl-currency');
            var len = sCur.length;
            if (len) {
                sCur.insertUl();
                sCur.selectUl();
            }
        }
    }

    /* Toolbar Search */
    var timeoutSearch = null;

    function hideSearch(e) {
        var $_container = e.children().find('.em-container-js-search');
        if (timeoutSearch) clearTimeout(timeoutSearch);
        timeoutSearch = setTimeout(function() {
            timeoutSearch = null;
            $_container.hide(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    // Show Cart
    function showSearch(e) {
        var $_container = e.children().find('.em-container-js-search');
        if (timeoutSearch) clearTimeout(timeoutSearch);
        timeoutSearch = setTimeout(function() {
            timeoutSearch = null;
            $_container.show(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    /* Toolbar Login */
    var tmlink;

    function showlink(el) {
        clearTimeout(tmlink);
        tmlink = setTimeout(function() {
            el.slideDown();
        }, 200);
    }

    function hidelink(el) {
        clearTimeout(tmlink);
        tmlink = setTimeout(function() {
            el.slideUp();
        }, 200);
    }

    function effectLoginForm() {
        var sLogin = $('#em-account-login-form');
        var sLink = $('#link-login');
        var sDivLink = $('#em-login-link');
        if (sLogin.length > 0) {
            //hover login form
            if (isMobile) {
                sLink.attr('href', 'javascript:void(0);');
                sLink.click(function(e) {
                    sLogin.slideToggle();
                });
            } else {
                sDivLink.mouseover(function() {
                    showlink(sLogin);
                });
                sDivLink.mouseout(function() {
                    hidelink(sLogin);
                });
            }
            // Popup Login Form
        }
    }

    /* Top Cart */
    var timeout = null;

    function hideCart(e) {
        var $_container = e.children().find('.em-container-js-topcart');
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            $_container.hide(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    // Show Cart
    function showCart(e) {
        var $_container = e.children().find('.em-container-js-topcart');
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            $_container.show(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }

    /* Menu toogle_menu_4_7164 */
    function toogleMenuPro_4_7164() {
        var $ = jQuery;
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-4_7164");
        var container = $("#toogle_menu_4_7164");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            if ((wi <= 767 || isPhone == true)) {
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Mobile Navigation */
    function fixNavigationMobileView() {
        var $_winW = $(window).width();
        var $_mmenu = $('#em-mheader-menu-content');
        var elem = $('#em-mheader-menu-content');
        var $_parent = $('#em-mheader-wrapper-menu');
        var $_iconNav = $('#em-mheader-menu-icon');
        if (!isPhone || $_winW > 767) {
            $_mmenu.removeClass();
            $_iconNav.removeClass('active');
            elem.removeClass('show');
            $_parent.removeClass('active');
        }
    };

    function fixNavOverFlow() {
        var $_iconNav = $('#em-mheader-menu-icon');
        var elem = $('#em-mheader-menu-content');
        var $_parent = $('#em-mheader-wrapper-menu');
        $_iconNav.click(function(e) {
            e.preventDefault();
            var self = $(this);
            var isSkipContentOpen = elem.hasClass('show') ? 1 : 0;
            self.removeClass('active');
            elem.removeClass('show');
            $_parent.removeClass('active');
            if (isSkipContentOpen) {
                self.removeClass('active');
                $_parent.removeClass('active');
            } else {
                self.addClass('active');
                elem.addClass('show');
                $_parent.addClass('active');
            }
        });
        if (isPhone) {
            $_parent.on("swipeleft", function() {
                var self = $(this);
                if (self.hasClass('active')) {
                    elem.removeClass('show');
                    $_iconNav.removeClass('active');
                    self.removeClass('active');
                }
            });
        }
    };



    /* Scroll Top */
    function backToTop() {
        // hide #back-top first
        var sBackTop = $('#back-top');
        if (sBackTop.length) {
            //var sClickBackTop = $('#back-top a');
            sBackTop.hide();
            // fade in #back-top
            if (!isMobile) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        sBackTop.fadeIn();
                    } else {
                        sBackTop.fadeOut();
                    }
                });
                // scroll body to 0px on click
                $('a', sBackTop).click(function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            }
        }
    };


    /* Newsletter */
    function showPopUpLogin() {
        if (jQuery('#em-popup').length > 0) {
            $.fancybox.open('#em-popup', {
                width: 'auto',
                height: 'auto',
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        }
    }

    jQuery(document).ready(function() {
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            fixNavigationMobileView();
            fixNavOverFlow();
        }

        toogleMenuPro_4_8356();
        toogleMenuPro_13_2552();
        emHoverUlLanguage();
        emHoverUlCurrency();

        $("body").on("mouseover", ".em-wrapper-js-search", function(e) {
            e.preventDefault();
            var $_this = $(this);
            showSearch($_this);
        });
        $("body").on("mouseout", ".em-wrapper-js-search", function(e) {
            e.preventDefault();
            var $_this = $(this);
            hideSearch($_this);
        });
        effectLoginForm();

        /* top-cart */
        if (isMobile == true) {
            var sLink = $('.em-amount-js-topcart');
            var sCartContent = $(".em-wrapper-js-topcart");
            sLink.attr('href', 'javascript:void(0)');
            sCartContent.click(function(event) {
                var $_this = $(this);
                var $_container = $_this.children().find('.em-container-js-topcart');
                $_container.slideToggle();
                $_this.toggleClass('em-click-topcart');
            });
        } else {
            // Hide Cart
            var sCartContent = $(".em-wrapper-js-topcart");
            sCartContent.bind('mouseover', function(e) {
                e.preventDefault();
                var $_this = $(this);
                showCart($_this);
            }).bind('mouseout', function(e) {
                e.preventDefault();
                var $_this = $(this);
                hideCart($_this);
            });
        }

        /* Main Slider */
        var sync1 = $('#em_owlcarousel_18_18282_sync1');
        sync1.owlCarousel({
            singleItem: true,
            responsiveRefreshRate: 200,
            paginationSpeed: 2000,
            rewindSpeed: 1000,
            lazyLoad: true,
            slideSpeed: 200,
            navigation: true,
            pagination: true,
            navigationText: ["Pre", "Next"],
            transitionStyle: 'fade',
            autoPlay: true,
        });

        /* #tab_emajaxtabs_fashion_clothing_1 */
        var divContent = jQuery('#em_ajax_products_b534a088f10dda4e97c08db40da5bb51fd7dfbf249adcb0fbfcdd011b88394d8').parents(".tab-content").first();
        if (divContent.length){
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event) {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_b534a088f10dda4e97c08db40da5bb51fd7dfbf249adcb0fbfcdd011b88394d8').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_b534a088f10dda4e97c08db40da5bb51fd7dfbf249adcb0fbfcdd011b88394d8').parents(".tab-content").first();
            if (tabContent.length > 0) {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active")) {
                    jQuery(elTitle.attr("href")).addClass("active");
            
                    var $_eheight = jQuery('#em_ajax_products_b534a088f10dda4e97c08db40da5bb51fd7dfbf249adcb0fbfcdd011b88394d8').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                } else {
                    tabContent.hide();
                }
            }
        } else {
            var $_eheight = jQuery('#em_ajax_products_b534a088f10dda4e97c08db40da5bb51fd7dfbf249adcb0fbfcdd011b88394d8').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_dcea911478e810adf5b4dd0c647570b3").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_dcea911478e810adf5b4dd0c647570b3').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_2 */
        var divContent = jQuery('#em_ajax_products_0c938c18d5a148bc17ded92946a8874417da467ea1b47e81600b2fad4b0069d8').parents(".tab-content").first();
        if (divContent.length){
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event){
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_0c938c18d5a148bc17ded92946a8874417da467ea1b47e81600b2fad4b0069d8').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_0c938c18d5a148bc17ded92946a8874417da467ea1b47e81600b2fad4b0069d8').parents(".tab-content").first();
            if (tabContent.length > 0){
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active")) {
                    jQuery(elTitle.attr("href")).addClass("active");

                    var $_eheight = jQuery('#em_ajax_products_0c938c18d5a148bc17ded92946a8874417da467ea1b47e81600b2fad4b0069d8').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                } else {
                    tabContent.hide();
                }
            }
        } else {
            var $_eheight = jQuery('#em_ajax_products_0c938c18d5a148bc17ded92946a8874417da467ea1b47e81600b2fad4b0069d8').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_9035ea3295de7287dd0e7cf0d96f81aa").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_9035ea3295de7287dd0e7cf0d96f81aa').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_3 */
        var divContent = jQuery('#em_ajax_products_d173e49422cdd13b8dea414e7e5000ff895ad33393be6bc4dd67a682798e5467').parents(".tab-content").first();
        if (divContent.length){
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event) {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_d173e49422cdd13b8dea414e7e5000ff895ad33393be6bc4dd67a682798e5467').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_d173e49422cdd13b8dea414e7e5000ff895ad33393be6bc4dd67a682798e5467').parents(".tab-content").first();
            if (tabContent.length > 0) {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active")) {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_d173e49422cdd13b8dea414e7e5000ff895ad33393be6bc4dd67a682798e5467').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                } else {
                    tabContent.hide();
                }
            }
        } else {
            
            var $_eheight = jQuery('#em_ajax_products_d173e49422cdd13b8dea414e7e5000ff895ad33393be6bc4dd67a682798e5467').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_af4301a505e999867aa13ecb44c8e546").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_af4301a505e999867aa13ecb44c8e546').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_4 */
        var divContent = jQuery('#em_ajax_products_420f80c147d1a4198caa813b37e50bbb6e95b67c3d2b8b201e1887ef19e5db88').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_420f80c147d1a4198caa813b37e50bbb6e95b67c3d2b8b201e1887ef19e5db88').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_420f80c147d1a4198caa813b37e50bbb6e95b67c3d2b8b201e1887ef19e5db88').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_420f80c147d1a4198caa813b37e50bbb6e95b67c3d2b8b201e1887ef19e5db88').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_420f80c147d1a4198caa813b37e50bbb6e95b67c3d2b8b201e1887ef19e5db88').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_715673c8b61b802ebc46448728aff688").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_715673c8b61b802ebc46448728aff688').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_5 */
        var divContent = jQuery('#em_ajax_products_d109e38f443b86431ea918a6bc6b8f4cdbe1bf16a0d28ace58e21e34d016146b').parents(".tab-content").first();
        if (divContent.length){
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_d109e38f443b86431ea918a6bc6b8f4cdbe1bf16a0d28ace58e21e34d016146b').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_d109e38f443b86431ea918a6bc6b8f4cdbe1bf16a0d28ace58e21e34d016146b').parents(".tab-content").first();
            if (tabContent.length > 0) {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active")){
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_d109e38f443b86431ea918a6bc6b8f4cdbe1bf16a0d28ace58e21e34d016146b').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                } else {
                    tabContent.hide();
                }
            }
        } else {
            
            var $_eheight = jQuery('#em_ajax_products_d109e38f443b86431ea918a6bc6b8f4cdbe1bf16a0d28ace58e21e34d016146b').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_cfcaab81d451700bf528a7a76fcf3ba8").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_cfcaab81d451700bf528a7a76fcf3ba8').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_6 */
        var divContent = jQuery('#em_ajax_products_be7d8c8c5dd59c37b092bb438da19bec1d22f666f32565e7926cb54c66b827ea').parents(".tab-content").first();
        if (divContent.length){
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event) {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_be7d8c8c5dd59c37b092bb438da19bec1d22f666f32565e7926cb54c66b827ea').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_be7d8c8c5dd59c37b092bb438da19bec1d22f666f32565e7926cb54c66b827ea').parents(".tab-content").first();
            if (tabContent.length > 0) {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active")) {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_be7d8c8c5dd59c37b092bb438da19bec1d22f666f32565e7926cb54c66b827ea').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }  else {
                    tabContent.hide();
                }
            }
        } else {
            var $_eheight = jQuery('#em_ajax_products_be7d8c8c5dd59c37b092bb438da19bec1d22f666f32565e7926cb54c66b827ea').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_c3a65788b9f68602d1825b3f76582d08").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_c3a65788b9f68602d1825b3f76582d08').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_7 */
        var divContent = jQuery('#em_ajax_products_3516d0eca37f8eb351759735034d35e1f549d7e8f8c47cf7503579583abd5385').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_3516d0eca37f8eb351759735034d35e1f549d7e8f8c47cf7503579583abd5385').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_3516d0eca37f8eb351759735034d35e1f549d7e8f8c47cf7503579583abd5385').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_3516d0eca37f8eb351759735034d35e1f549d7e8f8c47cf7503579583abd5385').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }else{
            var $_eheight = jQuery('#em_ajax_products_3516d0eca37f8eb351759735034d35e1f549d7e8f8c47cf7503579583abd5385').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_1c04c96197b9d1bcc843091f79434104").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_1c04c96197b9d1bcc843091f79434104').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_8 */
        var divContent = jQuery('#em_ajax_products_e90b3da69cc81132e2c9756b4a1e0dc608c9250e43a15c209522743c103f47bf').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_e90b3da69cc81132e2c9756b4a1e0dc608c9250e43a15c209522743c103f47bf').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_e90b3da69cc81132e2c9756b4a1e0dc608c9250e43a15c209522743c103f47bf').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_e90b3da69cc81132e2c9756b4a1e0dc608c9250e43a15c209522743c103f47bf').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_e90b3da69cc81132e2c9756b4a1e0dc608c9250e43a15c209522743c103f47bf').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_ce8dab62450268a7e3b42b9dde9890b4").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_ce8dab62450268a7e3b42b9dde9890b4').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_9 */
        var divContent = jQuery('#em_ajax_products_c25c177eca12c568423102e364f75723f7c0b84aad0fe7994fe77dfc0ad468ab').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_c25c177eca12c568423102e364f75723f7c0b84aad0fe7994fe77dfc0ad468ab').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_c25c177eca12c568423102e364f75723f7c0b84aad0fe7994fe77dfc0ad468ab').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_c25c177eca12c568423102e364f75723f7c0b84aad0fe7994fe77dfc0ad468ab').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_c25c177eca12c568423102e364f75723f7c0b84aad0fe7994fe77dfc0ad468ab').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_c98dd3c50e1f8ad02ef6ef326b219095").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_c98dd3c50e1f8ad02ef6ef326b219095').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_fashion_clothing_10 */
        var divContent = jQuery('#em_ajax_products_c7fc2645040a9c093a1ecd1492747d23bbd7f593ea008273cdd4003b97ab2b17').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_c7fc2645040a9c093a1ecd1492747d23bbd7f593ea008273cdd4003b97ab2b17').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_c7fc2645040a9c093a1ecd1492747d23bbd7f593ea008273cdd4003b97ab2b17').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_c7fc2645040a9c093a1ecd1492747d23bbd7f593ea008273cdd4003b97ab2b17').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_c7fc2645040a9c093a1ecd1492747d23bbd7f593ea008273cdd4003b97ab2b17').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_2ca8cd0eb6b96c75830d586587184275").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_2ca8cd0eb6b96c75830d586587184275').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_computer_electronic_1 */
        var divContent = jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    
                    var $_eheight = jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                    elTitle.bind("click", function()
                    {
                        if (!jQuery(this).hasClass("loaded"))
                        {
                            var that = this;
                            var $_eheight = jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                        }
                    });
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_2c7e60d9d30c80724c9fa9c271411dfa8480a971e2dfc373ccab95101e909f94').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_4382ac63922d2617c6873028906fb941").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_4382ac63922d2617c6873028906fb941').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_computer_electronic_2 */        
        var divContent = jQuery('#em_ajax_products_6f2f2ce87a85c1b209ba7b96dec920c51c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_6f2f2ce87a85c1b209ba7b96dec920c51c2985dc2a4f5efdd91b1ecb9533db0f').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_6f2f2ce87a85c1b209ba7b96dec920c51c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_6f2f2ce87a85c1b209ba7b96dec920c51c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_6f2f2ce87a85c1b209ba7b96dec920c51c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_bbc5c61c9046cd48b0763c69f0567dfd").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_bbc5c61c9046cd48b0763c69f0567dfd').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_computer_electronic_3 */        
        var divContent = jQuery('#em_ajax_products_2cf119c312eed6aa729c938b5dc9792a39ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_2cf119c312eed6aa729c938b5dc9792a39ef9d928314178e0734f311c2e012e1').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_2cf119c312eed6aa729c938b5dc9792a39ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_2cf119c312eed6aa729c938b5dc9792a39ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_2cf119c312eed6aa729c938b5dc9792a39ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');            
        }
        var owl = $("#em_minifilter_products_4f6fa27c5a615ab04e1b47b081c0c933").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_4f6fa27c5a615ab04e1b47b081c0c933').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_computer_electronic_4 */        
        var divContent = jQuery('#em_ajax_products_560eb4e6583b17f6945776a71a0065288d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_560eb4e6583b17f6945776a71a0065288d0ee49bd2295f7eecc3c69e6360021a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_560eb4e6583b17f6945776a71a0065288d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_560eb4e6583b17f6945776a71a0065288d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_560eb4e6583b17f6945776a71a0065288d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_e1338285452096074de940b51b798dd6").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_e1338285452096074de940b51b798dd6').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_5 */        
        var divContent = jQuery('#em_ajax_products_1114bbbf3b8d73087e2656ce35774b924e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_1114bbbf3b8d73087e2656ce35774b924e650e5f112d3e1ab94a6beaabe0b52d').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_1114bbbf3b8d73087e2656ce35774b924e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_1114bbbf3b8d73087e2656ce35774b924e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_1114bbbf3b8d73087e2656ce35774b924e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_2e756867c6ea3cfa757e82285be32784").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_2e756867c6ea3cfa757e82285be32784').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_6 */        
        var divContent = jQuery('#em_ajax_products_2081241d28865b3083e201d32577dad9836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_2081241d28865b3083e201d32577dad9836cd46b368fc868ce0acff8bbad4ceb').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_2081241d28865b3083e201d32577dad9836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_2081241d28865b3083e201d32577dad9836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_2081241d28865b3083e201d32577dad9836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_39c1535339eedaa26939126a86b898cd").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_39c1535339eedaa26939126a86b898cd').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_7 */        
        var divContent = jQuery('#em_ajax_products_b3b5efa6b651bbb9fbbd0c21c5d45fc0993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_b3b5efa6b651bbb9fbbd0c21c5d45fc0993ea6de3a565c475e1d63552fed9c15').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_b3b5efa6b651bbb9fbbd0c21c5d45fc0993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_b3b5efa6b651bbb9fbbd0c21c5d45fc0993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_b3b5efa6b651bbb9fbbd0c21c5d45fc0993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_b498ad93f3a539eb87c2c1f0f7d729b2").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_b498ad93f3a539eb87c2c1f0f7d729b2').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_8 */        
        var divContent = jQuery('#em_ajax_products_447a2f46e722c9bc21f8225e01bf3e4525b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_447a2f46e722c9bc21f8225e01bf3e4525b30b2980e3122e35b03d1952288534').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_447a2f46e722c9bc21f8225e01bf3e4525b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_447a2f46e722c9bc21f8225e01bf3e4525b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_447a2f46e722c9bc21f8225e01bf3e4525b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_534c32c1df2549a061a14eb4efec4295").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_534c32c1df2549a061a14eb4efec4295').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_9 */        
        var divContent = jQuery('#em_ajax_products_a656139fb5b0cab95b32a7b8264d0321aec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_a656139fb5b0cab95b32a7b8264d0321aec524c247e20ef692689027b9d89e2a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_a656139fb5b0cab95b32a7b8264d0321aec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_a656139fb5b0cab95b32a7b8264d0321aec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_a656139fb5b0cab95b32a7b8264d0321aec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_772956039a0ec46c613dbf71b46e21f8").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_772956039a0ec46c613dbf71b46e21f8').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_computer_electronic_10 */       
        var divContent = jQuery('#em_ajax_products_8f6f5d2fec4359e7d0c2e72aeb9225cacf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_8f6f5d2fec4359e7d0c2e72aeb9225cacf9c000200319e5dfd46fee654b6338b').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_8f6f5d2fec4359e7d0c2e72aeb9225cacf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_8f6f5d2fec4359e7d0c2e72aeb9225cacf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_8f6f5d2fec4359e7d0c2e72aeb9225cacf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_d7cfe02ac72a21b168ffd2fa9946413d").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_d7cfe02ac72a21b168ffd2fa9946413d').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_1 */
        var divContent = jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                    elTitle.bind("click", function()
                    {
                        if (!jQuery(this).hasClass("loaded"))
                        {
                            var that = this;
                            var $_eheight = jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                                    
                        }
                    });
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_ff94c10326ffec360e901ec950f300c6dbe1bf16a0d28ace58e21e34d016146b').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_0281e5bb2a45149b34847a9f2c4cfebd").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_0281e5bb2a45149b34847a9f2c4cfebd').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* #tab_emajaxtabs_sport_outdoor_2 */
        var divContent = jQuery('#em_ajax_products_d6c93d805c841efe2790d945bdf645491c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_d6c93d805c841efe2790d945bdf645491c2985dc2a4f5efdd91b1ecb9533db0f').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_d6c93d805c841efe2790d945bdf645491c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_d6c93d805c841efe2790d945bdf645491c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_d6c93d805c841efe2790d945bdf645491c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_87a0e721a6ec1405dfa2acbfb225ce3f").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_87a0e721a6ec1405dfa2acbfb225ce3f').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_3 */
        var divContent = jQuery('#em_ajax_products_28e5a3860562452c3ce755a0dab075e739ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_28e5a3860562452c3ce755a0dab075e739ef9d928314178e0734f311c2e012e1').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_28e5a3860562452c3ce755a0dab075e739ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_28e5a3860562452c3ce755a0dab075e739ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_28e5a3860562452c3ce755a0dab075e739ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_e4f7a942a7919cbc81cebd3322b44cc9").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_e4f7a942a7919cbc81cebd3322b44cc9').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_4 */
        var divContent = jQuery('#em_ajax_products_21aa86b94f82d82a2dbb759c0b8ecfd28d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_21aa86b94f82d82a2dbb759c0b8ecfd28d0ee49bd2295f7eecc3c69e6360021a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_21aa86b94f82d82a2dbb759c0b8ecfd28d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_21aa86b94f82d82a2dbb759c0b8ecfd28d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_21aa86b94f82d82a2dbb759c0b8ecfd28d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_456169491aadb8a901b41e03fe035f6e").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_456169491aadb8a901b41e03fe035f6e').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_5 */
        var divContent = jQuery('#em_ajax_products_c4bb2ca373ff005be170469aa147ea374e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_c4bb2ca373ff005be170469aa147ea374e650e5f112d3e1ab94a6beaabe0b52d').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_c4bb2ca373ff005be170469aa147ea374e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_c4bb2ca373ff005be170469aa147ea374e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_c4bb2ca373ff005be170469aa147ea374e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_2c36b5527c16a078b16d3b280aa81b2d").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_2c36b5527c16a078b16d3b280aa81b2d').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_6 */
        var divContent = jQuery('#em_ajax_products_3deef7bf10d6da8d4bbc0a4acfafd7fb836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_3deef7bf10d6da8d4bbc0a4acfafd7fb836cd46b368fc868ce0acff8bbad4ceb').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_3deef7bf10d6da8d4bbc0a4acfafd7fb836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_3deef7bf10d6da8d4bbc0a4acfafd7fb836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_3deef7bf10d6da8d4bbc0a4acfafd7fb836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_69ee7bba91a00a7e4fb8cd4f90fbf0a1").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_69ee7bba91a00a7e4fb8cd4f90fbf0a1').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_7 */
        var divContent = jQuery('#em_ajax_products_22e9f0da43c944b31e0fc64c07a42fbe993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_22e9f0da43c944b31e0fc64c07a42fbe993ea6de3a565c475e1d63552fed9c15').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_22e9f0da43c944b31e0fc64c07a42fbe993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_22e9f0da43c944b31e0fc64c07a42fbe993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
                    setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_22e9f0da43c944b31e0fc64c07a42fbe993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');            
        }
        var owl = $("#em_minifilter_products_18916e38538658e8bba3f5f01c07f192").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_18916e38538658e8bba3f5f01c07f192').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_8 */
        var divContent = jQuery('#em_ajax_products_e87022dee4ae1076bb5b4a8d07e020f625b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_e87022dee4ae1076bb5b4a8d07e020f625b30b2980e3122e35b03d1952288534').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_e87022dee4ae1076bb5b4a8d07e020f625b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_e87022dee4ae1076bb5b4a8d07e020f625b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_e87022dee4ae1076bb5b4a8d07e020f625b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');           
        }
        var owl = $("#em_minifilter_products_cf7c71f1ee42d4db7317a1c08893e1f3").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_cf7c71f1ee42d4db7317a1c08893e1f3').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_9 */
        var divContent = jQuery('#em_ajax_products_ff399b09975cd7cfb318d8dc23cce786aec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_ff399b09975cd7cfb318d8dc23cce786aec524c247e20ef692689027b9d89e2a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_ff399b09975cd7cfb318d8dc23cce786aec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_ff399b09975cd7cfb318d8dc23cce786aec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_ff399b09975cd7cfb318d8dc23cce786aec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_bf9d9b03541896cd656eac65b81421ae").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_bf9d9b03541896cd656eac65b81421ae').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_sport_outdoor_10 */
        var divContent = jQuery('#em_ajax_products_b8746ca7c141604e8e0af726adf3014ecf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_b8746ca7c141604e8e0af726adf3014ecf9c000200319e5dfd46fee654b6338b').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_b8746ca7c141604e8e0af726adf3014ecf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_b8746ca7c141604e8e0af726adf3014ecf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_b8746ca7c141604e8e0af726adf3014ecf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_cf479f6b9cc54038f15741e8467582f5").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_cf479f6b9cc54038f15741e8467582f5').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_1 */
        var divContent = jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                    elTitle.bind("click", function()
                    {
                        if (!jQuery(this).hasClass("loaded"))
                        {
                            var that = this;
                            var $_eheight = jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').find('.em-filterproducts-grid');
                                    setEqualElement($_eheight, '.product-name');
                                    
                        }
                    });
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_5c388c8f49c08db9b9dd8f90f9c26508fa71123cddfbbc8610ddd1253eddbef3').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_f68388aba7a81291c5fb93732b4f711d").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_f68388aba7a81291c5fb93732b4f711d').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_2 */
        var divContent = jQuery('#em_ajax_products_7ad933e9191f37c491728a85b53454071c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_7ad933e9191f37c491728a85b53454071c2985dc2a4f5efdd91b1ecb9533db0f').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_7ad933e9191f37c491728a85b53454071c2985dc2a4f5efdd91b1ecb9533db0f').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_7ad933e9191f37c491728a85b53454071c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_7ad933e9191f37c491728a85b53454071c2985dc2a4f5efdd91b1ecb9533db0f').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_a99e555a397bb40cde0d0cbf1ba00124").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_a99e555a397bb40cde0d0cbf1ba00124').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_3 */
        var divContent = jQuery('#em_ajax_products_3b7cca9b019ff5d42191af610943ca3f39ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_3b7cca9b019ff5d42191af610943ca3f39ef9d928314178e0734f311c2e012e1').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_3b7cca9b019ff5d42191af610943ca3f39ef9d928314178e0734f311c2e012e1').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_3b7cca9b019ff5d42191af610943ca3f39ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_3b7cca9b019ff5d42191af610943ca3f39ef9d928314178e0734f311c2e012e1').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_099cbcf1bb57df9c6ccfd96b8377f296").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_099cbcf1bb57df9c6ccfd96b8377f296').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_4 */
        var divContent = jQuery('#em_ajax_products_16125f852819bbd7614b10a13afe04778d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_16125f852819bbd7614b10a13afe04778d0ee49bd2295f7eecc3c69e6360021a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_16125f852819bbd7614b10a13afe04778d0ee49bd2295f7eecc3c69e6360021a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_16125f852819bbd7614b10a13afe04778d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_16125f852819bbd7614b10a13afe04778d0ee49bd2295f7eecc3c69e6360021a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_1fb27bd0372824b0facc5d01e853cea3").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_1fb27bd0372824b0facc5d01e853cea3').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_5 */
        var divContent = jQuery('#em_ajax_products_edf0989b908b1e2afd03dcf699cb25fb4e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_edf0989b908b1e2afd03dcf699cb25fb4e650e5f112d3e1ab94a6beaabe0b52d').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_edf0989b908b1e2afd03dcf699cb25fb4e650e5f112d3e1ab94a6beaabe0b52d').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_edf0989b908b1e2afd03dcf699cb25fb4e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_edf0989b908b1e2afd03dcf699cb25fb4e650e5f112d3e1ab94a6beaabe0b52d').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_a3f287ad555ab9de30ac07debd019e16").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_a3f287ad555ab9de30ac07debd019e16').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_6 */
        var divContent = jQuery('#em_ajax_products_c7847ac70de6f8d4bd55b85a46e586a1836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_c7847ac70de6f8d4bd55b85a46e586a1836cd46b368fc868ce0acff8bbad4ceb').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_c7847ac70de6f8d4bd55b85a46e586a1836cd46b368fc868ce0acff8bbad4ceb').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_c7847ac70de6f8d4bd55b85a46e586a1836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_c7847ac70de6f8d4bd55b85a46e586a1836cd46b368fc868ce0acff8bbad4ceb').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_ebedc4e06a964e8c111757b2dd5e530f").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_ebedc4e06a964e8c111757b2dd5e530f').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_7 */
        var divContent = jQuery('#em_ajax_products_1d0226575cdc28cb723760a7480e41f2993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_1d0226575cdc28cb723760a7480e41f2993ea6de3a565c475e1d63552fed9c15').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_1d0226575cdc28cb723760a7480e41f2993ea6de3a565c475e1d63552fed9c15').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_1d0226575cdc28cb723760a7480e41f2993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_1d0226575cdc28cb723760a7480e41f2993ea6de3a565c475e1d63552fed9c15').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_be8ac0d38f19db68fb956812aba27ca1").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_be8ac0d38f19db68fb956812aba27ca1').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_8 */
        var divContent = jQuery('#em_ajax_products_a24e207ea60bfd5c7acec2c770dae1bd25b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_a24e207ea60bfd5c7acec2c770dae1bd25b30b2980e3122e35b03d1952288534').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_a24e207ea60bfd5c7acec2c770dae1bd25b30b2980e3122e35b03d1952288534').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_a24e207ea60bfd5c7acec2c770dae1bd25b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_a24e207ea60bfd5c7acec2c770dae1bd25b30b2980e3122e35b03d1952288534').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_42fef0ec323847ba4a8df193e20da245").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_42fef0ec323847ba4a8df193e20da245').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_9 */
        var divContent = jQuery('#em_ajax_products_0cc0c4f659413f8d035dd7ea3d8a9b7baec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_0cc0c4f659413f8d035dd7ea3d8a9b7baec524c247e20ef692689027b9d89e2a').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_0cc0c4f659413f8d035dd7ea3d8a9b7baec524c247e20ef692689027b9d89e2a').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_0cc0c4f659413f8d035dd7ea3d8a9b7baec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_0cc0c4f659413f8d035dd7ea3d8a9b7baec524c247e20ef692689027b9d89e2a').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_47fad1b2c88f81f7a7ac58eb7414e4e3").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_47fad1b2c88f81f7a7ac58eb7414e4e3').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }
        /* #tab_emajaxtabs_furniture_decor_10 */
        var divContent = jQuery('#em_ajax_products_80d84932682d2faeb986e2bb2976ba0bcf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
        if (divContent.length)
        {
            jQuery('a[href="#' + divContent.attr("id") + '"]').click(function(event)
            {
                event.preventDefault();
                
                jQuery(this).parent().addClass("active");
                jQuery(this).parent().siblings().removeClass("active");
                var tab = jQuery(this).attr("href");
                jQuery("#" + jQuery('#em_ajax_products_80d84932682d2faeb986e2bb2976ba0bcf9c000200319e5dfd46fee654b6338b').parents(".emajaxtabs").attr("id") + " .tab-content").not(tab).css("display", "none");
                jQuery(".emajaxtabs .tab-content").not(tab).removeClass("active");
                jQuery(tab).addClass("active");
                jQuery(tab).fadeIn("fast");
            });
            var tabContent = jQuery('#em_ajax_products_80d84932682d2faeb986e2bb2976ba0bcf9c000200319e5dfd46fee654b6338b').parents(".tab-content").first();
            if (tabContent.length > 0)
            {
                var elTitle = jQuery('.custom-tab').find("a[data-tab='" + tabContent.attr("id") + "']").first();
                if (elTitle.parent("li").hasClass("active"))
                {
                    jQuery(elTitle.attr("href")).addClass("active");
                    var $_eheight = jQuery('#em_ajax_products_80d84932682d2faeb986e2bb2976ba0bcf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
                            setEqualElement($_eheight, '.product-name');
                            
                }
                else
                {
                    tabContent.hide();
                }
            }
        }
        else
        {
            var $_eheight = jQuery('#em_ajax_products_80d84932682d2faeb986e2bb2976ba0bcf9c000200319e5dfd46fee654b6338b').find('.em-filterproducts-grid');
            setEqualElement($_eheight, '.product-name');
        }
        var owl = $("#em_minifilter_products_008a2f985ea395444c4611874e896e1b").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 3,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 3],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 2],
                itemsTablet: [768, 2],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_008a2f985ea395444c4611874e896e1b').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* Best Seller Slider */
        var owl = $("#em_minifilter_products_2d1580d33630882c6a0307c8f6145570").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 1,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 1],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 1],
                itemsTablet: [768, 1],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_2d1580d33630882c6a0307c8f6145570').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        /* Sale OFF Slider */
        var owl = $("#em_minifilter_products_70f6653a44797dd14bcef64425f9c305").find('.owl-carousel');
        if (owl.length)
        {
            owl.owlCarousel(
            {
                //Basic Speeds
                slideSpeed: 800,
                rewindSpeed: 800,
                //Autoplay
                autoPlay: false,
                lazyLoad: false,
                stopOnHover: false,
                mouseDrag: false,
                touchDrag: false,
                // Navigation
                navigation: true,
                navigationText: ["Previous", "Next"],
                pagination: false,
                paginationNumbers: false,
                // Responsive 
                responsive: true,
                items: 1,
                /*items above 1200px browser width*/
                itemsDesktop: [1200, 1],
                /*//items between 1199px and 981px*/
                itemsDesktopSmall: [992, 1],
                itemsTablet: [768, 1],
                itemsMobile: [480, 1],
                // CSS Styles
                baseClass: "owl-carousel",
                theme: "owl-theme",
                transitionStyle: false,
                addClassActive: true,
                scrollPerPage: false,
                afterMove: function()
                {
                    var $_img = jQuery('#em_minifilter_products_70f6653a44797dd14bcef64425f9c305').find('img.em-img-lazy');
                    if ($_img.length)
                    {
                        var timeout = setTimeout(function()
                        {
                            $_img.trigger("appear");
                        }, 200);
                    }
                },
            });
        }

        backToTop();
        showPopUpLogin();
    });

    

})(jQuery);
jQuery(document).on('resize orientationchange', window, function() {
    if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
        toogleMenuPro_4_8356();
        toogleMenuPro_13_2552();
    }
});
jQuery(window).resize(jQuery.throttle(300, function() {
    if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
        fixNavigationMobileView();
    }
}));


//<![CDATA[
var isMobile = /iPhone|iPod|iPad|Phone|Mobile|Android|hpwos/i.test(navigator.userAgent);
var isPhone = /iPhone|iPod|Phone|Android/i.test(navigator.userAgent);
var isWindowPhone = '';
var language = 'images/language/';
var urlsite = '';
var layout = '2columns-left';
var product_zoom = null;
if (typeof EM == 'undefined') EM = {};
EM.SETTING = {
    USE_TAB: '1',
    DISABLE_VARIATION: '1',
    DISABLE_RESPONSIVE: '1',
    AJAXCART_AUTOCLOSE: '0',
    DISABLE_AJAX_ADDTO: '1',
    DISABLE_COLLAPSE: '1',
    STICKY_MENU_SEARCH_CART: '1',
    RIGHT_TO_LEFT: '0',
    COLOR_SWATCHES: '1',
};
//]]>