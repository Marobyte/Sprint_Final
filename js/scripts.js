$(document).ready(function () {
  var slider = $("#slideshow");
  var slider_nav = $("#slideshow-nav");
  slider_nav.find("a[href=#slide1]").addClass("active");


  slider_nav.find("a").click(function () {
    slider_nav.find("a").removeClass("active");
    $(this).addClass("active");
  });


  $('.arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.arriba').slideDown(300);
		} else {
			$('.arriba').slideUp(300);
		}
	});
  
});
  
//# sourceURL=pen.js
