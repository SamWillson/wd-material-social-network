$(document).ready(function(){
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
	carouselNext(3000)
	$(".sidebar.sidebar-left").css("height", $(document).height() - 64 + "px")
	$(".sidebar.sidebar-right").css("height", $(document).height() - 64 + "px")
})

function carouselNext(time){
	setInterval(function(){
		$('.carousel-post-info').carousel('next')
	}, time)
}
