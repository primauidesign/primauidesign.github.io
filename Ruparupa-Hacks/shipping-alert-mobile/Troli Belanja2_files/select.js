jQuery(document).ready(function($){if(jQuery('select').length>0){jQuery('select').each(function(){var _this=this;changeSelect(jQuery(this));setInterval(function(){changeSelect(jQuery(_this));},100);jQuery(this).change(function(){jQuery(this).prev().find('span').text(jQuery(this).children("option").filter(":selected").text());});});}});function changeSelect(elm){if(elm.css('display')!='none'){var width=elm.outerWidth();var height=elm.outerHeight();if(!elm.parents('.select').hasClass('select')&&!elm.hasClass('no-display')){elm.wrap('<div class="select" />');var text=elm.children("option").filter(":selected").text();elm.parent().prepend('<span class="select-bg" style="width:'+width+'px;height:'+height+'px;line-height:'+height+'px"><span class="select-text">'+text+'</span></span>');}else{var text=elm.children("option").filter(":selected").text();elm.parent().find('.select-bg').text(text).show();}}else{elm.parent().find('.select-bg').hide();}}function getAllEvents(element){var result=[];for(var key in element){if(key.indexOf('on')===0){result.push(key.slice(2));}}return result.join(' ');}