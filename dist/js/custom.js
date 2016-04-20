

		$(document).ready(function(){


			$('.bxslider').bxSlider({
				auto: true,
				autoControls: true,
				pager:true
			});


			var winwid = $(document).width();


			if(winwid<992 && winwid>481){
				$(".left-bar").insertAfter(".display-bar");
				var hit = $('.right-bar').height();
			}
			else if(winwid <= 480 && winwid >=320){
				$(".left-bar").insertAfter(".display-bar");
				var hit = $('#dis').height();
			}
			else{
				var hit = $('#dis').height();
			}



			$('.left-bar>div').slimScroll({
				height: hit,
				railVisible: true,
				alwaysVisible: false,
				size: '4px',
				wheelStep: 2,
			});

			$(".main-ul li").mouseover(function(){
				$(".main-ul li").removeClass('active');
				$(this).addClass('active');
			});


			$('.proslide').bxSlider({
				slideWidth: 153,
				moveSlides: 1,
				minSlides: 2,
				maxSlides: 7,
				slideMargin: 30,
				pager:false,
			});

			$('.brandslide').bxSlider({
				slideWidth: 90,
				moveSlides: 2,
				minSlides: 2,
				maxSlides: 11,
				slideMargin: 20,
				pager:false,
			});



		});
