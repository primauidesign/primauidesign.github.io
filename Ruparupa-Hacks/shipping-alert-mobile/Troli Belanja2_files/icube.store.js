function Store(){this.getPageName=function(includePath){includePath=(typeof includePath=="undefined")?'false':includePath;var pageName=window.location.pathname;if(!includePath){pageName=pageName.substring(pageName.lastIndexOf('/')+1);}return pageName;}
this.googleEventTracker=function(category,action,label,value){if(window.icube.jdata&&!window.icube.jdata.isDeveloperMode){if(typeof value=="undefined"){_gaq.push(['_trackEvent',category,action,label])}else{_gaq.push(['_trackEvent',category,action,label,value])}}}}