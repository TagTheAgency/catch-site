jQuery(document).ready(function($){

	// hero banner split image fadein
	setTimeout(function(){
		$('.fade-in').css('opacity','1');
	},600);

	// Fade in elements on scroll function
	$(window).scroll(function() {
		$.each($('.lazy-load'), function() {
			if ( $(this).offset().top < ($(window).scrollTop() + $(window).height() + 30) ) {
				$(this).addClass('fade-up');
			}
		});
	});

	$("#top").click(function(){
		$("html").animate({
			scrollTop: 0
		}, 1500);
	});

	$('.contact-form').submit(function(){
		$(this).fadeOut();
		$('#form-header').fadeOut(function(){
			setTimeout(function(){
				$('#form-header').html('Your message has been sent. Thanks <i class="fas fa-hand-peace"></i>');
				$('#form-header').fadeIn();
			},100);
		});
	});

	$(".form-scroll").click(function(){
		$("html").animate({scrollTop: $(".contact-form").offset().top}, 1500)
		$("#form-name").focus();
	});

	$(".pricing-container .flex-col").hover(function(){
		$(".pricing-container .flex-col").css('opacity','0.2');
		$(this).css({
			'opacity':'1',
			'box-shadow':'0px 0px 5px rgba(#000000, 0.27)'
		});
	},function(){
		$(".pricing-container .flex-col").css({
			'opacity':'1',
			'box-shadow':'0px 0px 5px rgba(#000000, 0.07)'
		});
	});

});
