(function($){'use strict';$.widget('icube.header',{_create:function(){this.initAnnouncementHeader();this.initMiniCart();this.initAccountLinks();this.initMiniTrackorder();this.initMegamenu();var _this=this;$('body').click(function(e){if(!$(e.target).parents().andSelf().is('.skip-content')){_this._hideAllSkipContent();}});},initAnnouncementHeader:function(){var announcementBlock=$('.header-announcement-background');var hideAnnouncementHeader=$.cookie('hideAnnouncementHeader');if(hideAnnouncementHeader){announcementBlock.hide();}else{announcementBlock.show();}announcementBlock.find('.close-announcement').click(function(){announcementBlock.slideUp();var date=new Date();var time=10;date.setTime(date.getTime()+(time*60*1000));$.cookie('hideAnnouncementHeader',true,{expires:date});});$('.header-announcement-background .content-list').bxSlider({auto:true,pause:5000,mode:'fade',controls:false,pager:false});},_hideAllSkipContent:function(){$('.header-container .skip-content').hide();},initMiniCart:function(){},initAccountLinks:function(){var _this=this;$j('.account-link .links.loggedin').click(function(e){e.preventDefault();e.stopPropagation();var menu=$(this).parent().find('.myaccount-menu');if(!menu.is(':visible')){_this._hideAllSkipContent(menu);menu.fadeIn();}else{menu.hide();}});},initMiniTrackorder:function(){var _this=this;$j('#orderstatus-form-mini-link').click(function(e){e.preventDefault();e.stopPropagation();var content=$(this).parent().find('#orderstatus-form-mini');if(!content.is(':visible')){_this._hideAllSkipContent(content);content.fadeIn();content.find('#orderid').focus();}else{content.hide();}});},initMegamenu:function(){var gridRows=[];var tempRow=[];var listsElement=$j('#header-nav ul.level0').children('li');listsElement.each(function(index){if($j(this).css('clear')!='none'&&index!=0){gridRows.push(tempRow);tempRow=[];}tempRow.push(this);if(listsElement.length==index+1){gridRows.push(tempRow);}});$j.each(gridRows,function(){var tallestElmHeight=0;$j.each(this,function(){$j(this).css({'min-height':''});var height=$(this).height();if(height>tallestElmHeight){tallestElmHeight=totalHeight;}});$j.each(this,function(){$j(this).css('min-height',tallestElmHeight);});});}});}(jQuery));