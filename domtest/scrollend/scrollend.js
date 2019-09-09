function getScrollTop() {  
    var scrollPos;  

    if (window.pageYOffset) {  
    	scrollPos = window.pageYOffset; 
    } else if (document.compatMode && document.compatMode != 'BackCompat') { 
    	scrollPos = document.documentElement.scrollTop; 
    } else if (document.body) { 
    	scrollPos = document.body.scrollTop; 
    }   

    return scrollPos;   
} 


if (typeof jQuery === 'undefined') {
	Object.prototype.scrollend = function() {
		var timer_start = true;
		function endTimer() {
			timer_start = false;
			var timer;
			var top_ori = getScrollTop();
			timer =  setInterval(function() {
				var top_new = getScrollTop();
				if(top_new  == top_ori) {
					timer_start = true;
					/*test-start*/
					alert('is end');
					/*test-end*/
					clearInterval(timer);
				} else {
					top_ori = top_new;
				}
			},100);
		}
		window.onscroll = function() {
			/*test-start*/
			console.log(timer_start);
			/*test-end*/
			if(!timer_start){
				return false;
			}
			endTimer();
			
		}
	}

	/*Object.prototype = function(){
		var timer_start = true;
		function endTimer(){
			timer_start = false;
			var timer;
			var top_ori = getScrollTop();
			timer =  setInterval(function(){
				var top_new = getScrollTop();
				if(top_new  == top_ori){
					timer_start = true;
					alert('is end');
					clearInterval(timer);
				} else {
					top_ori = top_new;
				}
			},100);
		}
		window.onscroll = function(){
			console.log(timer_start)
			if(!timer_start){
				return false;
			}
			endTimer();
			
		}
	}
	Object.prototype.scrollend = function(){

	}*/
} else {

}