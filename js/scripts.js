jQuery(window).on('load',function(){
	$('.box_slide').slick({
		slideshow:1,
		slidesToScroll:1,
		arrows: false,
		fade: true,
		asNavFor: '.slideshow'
	});
 
	$('.slideshow').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: false,
	  centerMode: true,
	  asNavFor: '.box_slide',
	  infinite: true,
	  prevArrow:"<button type='button' title='previous arrow' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' title='next arrow' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
	});
});