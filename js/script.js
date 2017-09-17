$(document).ready(function() {
	
	
	//	Sticky Navigation
	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  	offset: '60px;'																			 
	});	
	
	
	
	//	Scroll on Buttons
	
	//	I'm Hungry Button
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	
	
	// Show me more Button
	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	
	
});
