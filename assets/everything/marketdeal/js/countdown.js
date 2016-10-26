(function($) {
	$.fn.countdown = function(options, callback) {

		//custom 'this' selector
		//thisEl = $(this);

		//array of custom settings
		var settings = { 
			'date': null,
			'format': null
		};

		//append the settings array to options
		if(options) {
			$.extend(settings, options);
		}
		var interval = new Array($(this).length);
		var timeNow = new Array($(this).length);
		//main countdown function
		function countdown_proc(element,index) {
			
			var thisEl = element;
			
			if(typeof timeNow[index] == 'undefined'){
				timeNow[index] = em_now;
			} else {
				timeNow[index] += 1;
			}
			//var eventDate = Date.parse(thisEl.parent().find('.em_time').html()) / 1000;		// ex : 2014/07/23 20:19:00
			var eventDate = thisEl.parent().find('.time').html();		// ex : 2014/07/23 20:19:00
			var currentDate = Math.floor(timeNow[index]);

			if(eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval[index]);
			}

			var seconds = eventDate - currentDate;
			if(seconds <= 0 ) return false;
			var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
			seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

			var hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

			var minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

			//conditional Ss
			if (days == 1) { thisEl.find(".timeRefDays").text(em_deal_date.day); } else { thisEl.find(".timeRefDays").text(em_deal_date.days); }
			if (hours == 1) { thisEl.find(".timeRefHours").text(em_deal_date.hour); } else { thisEl.find(".timeRefHours").text(em_deal_date.hours); }
			if (minutes == 1) { thisEl.find(".timeRefMinutes").text(em_deal_date.minute); } else { thisEl.find(".timeRefMinutes").text(em_deal_date.minutes); }
			if (seconds == 1) { thisEl.find(".timeRefSeconds").text(em_deal_date.second); } else { thisEl.find(".timeRefSeconds").text(em_deal_date.seconds); }

			//logic for the two_digits ON setting
			if(settings['format'] == "on") {
				days = (String(days).length >= 2) ? days : "0" + days;
				hours = (String(hours).length >= 2) ? hours : "0" + hours;
				minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
			}

			//update the countdown's html values.
			if(!isNaN(eventDate)) {
				thisEl.find(".days").text(days);
				thisEl.find(".hours").text(hours);
				thisEl.find(".minutes").text(minutes);
				thisEl.find(".seconds").text(seconds);
			} else { 
				//alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
				clearInterval(interval[index]); 
			}
		}

		//run the function
		$(this).each(function(index){
			var element = $(this);
			interval[index] = setInterval(function(){
				countdown_proc(element,index);

			}, 1000);
		});

		//loop the function
		//interval = setInterval(countdown_proc, 1000);
	}
}) (jQuery);