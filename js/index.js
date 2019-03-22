/*登录注册*/
function showQrCode(){
	$('.top-ul-li-a-last').on({
		'mouseover' : function(){
			$('.top-ul-li-last-div').show();
		},
		'mouseout' : function(){
			$('.top-ul-li-last-div').hide();
		}
	})
}
showQrCode();
/*导航*/
function navHover(){
	$('#navWrap .nav ul li:nth-child(1) a').addClass('active');
	$('#navWrap .nav ul li a').mouseenter(function(){
		$(this).addClass('active');
	});
	$('#navWrap .nav ul li a').click(function(){
		$('#navWrap .nav ul li:nth-child(1) a').removeClass('active');
		$(this).addClass('change').parent().siblings().children('a').removeClass('change')
	});
	$('#navWrap .nav ul li a').mouseleave(function(){
		$(this).not('#navWrap .nav ul li:nth-child(1) a').removeClass('active')
	})
}
navHover();
function searchTxtFocus(){
	$('#navWrap .nav form #searchTxt').on({
		'focus' : function(){
			$(this).attr({"value" : ""})
		},
		'blur' : function(){
			$(this).attr({"value" : "搜索你感兴趣的品牌"})
		}
	})
}
searchTxtFocus();
/*轮播图2019.03.22*/
function carousel(){
	$.getJSON('./json/index.json',function(msg){
		var str = "";
		for(var i in msg){
			for(var j = 0,len = msg.carousel.length;j < len;j++){
				str += `<li><a href="#"><img src="img/${msg.carousel[j]}"/></a></li>`;
			}
		}
		$("#carouselPic").html(str);
	});
	$("#carouselPic").mouseover(function(){
		carouselLeftAShow();
		$("#carouselLeftAFirst").mouseover(function(){
			carouselLeftAShow();
		});
		$('#carouselLeftALast').mouseover(function(){
			carouselLeftAShow();
		})
	});
	function carouselLeftAShow(){
		$('#carouselLeftAFirst').css('display','block');
		$('#carouselLeftALast').css('display','block');
	};
	$("#carouselPic").mouseout(function(){
		$('#carouselLeftAFirst').css('display','none');
		$('#carouselLeftALast').css('display','none');
	});
	
	$('#carouselLeftALast').click(function(){
		carouselSportNext();
	});
	function carouselSportNext(){
		$('#carouselPic').stop().animate({marginLeft : -770},function(){
			$("#carouselPic").css("margin-left",0).find( "li:first" ).appendTo( "#carouselPic" );
		});
		$('#carouselCenterBtn').stop().animate({marginLeft : -20},function(){
			$("#carouselCenterBtn").css("margin-left",0).find( "li:first" ).appendTo( "#carouselCenterBtn" );
		});
		$('#carouselCenterBtn li:nth-child(3) a').addClass('carouselCenterBtnchange');
		$('#carouselCenterBtn li:nth-child(2) a').removeClass('carouselCenterBtnchange');
	};
	
	$('#carouselLeftAFirst').click(function(){
		carouselSportPrev();
	});
	function carouselSportPrev(){
		$("#carouselPic").stop().animate({"margin-left" : 0},function(){
			$("#carouselPic li:last").prependTo( "#carouselPic" );
			$("#carouselPic").css("margin-left" , -770);
		});
		$("#carouselCenterBtn").stop().animate({"margin-left" : 0},function(){
			$("#carouselCenterBtn li:last").prependTo( "#carouselCenterBtn" );
			$("#carouselCenterBtn").css("margin-left" , -20);
		});
		$('#carouselCenterBtn li:nth-child(2) a').removeClass('carouselCenterBtnchange');
		$('#carouselCenterBtn li:nth-child(2) a').addClass('carouselCenterBtnchange');
		$('#carouselCenterBtn li:nth-child(3) a').removeClass('carouselCenterBtnchange');
	}
	function startSetInterval(){
		var timer = null;
		timer = setInterval(function(){
			carouselSportNext();
		},3000);
		$('#carouselPic').mouseover(function(){
			clearInterval(timer);
		});
		$('#carouselLeftAFirst').mouseover(function(){
			clearInterval(timer);
		});
		$('#carouselLeftALast').mouseover(function(){
			clearInterval(timer);
		});
	}
	startSetInterval();
	$('#carouselPic').mouseout(function(){
		startSetInterval();
	});
}
carousel();