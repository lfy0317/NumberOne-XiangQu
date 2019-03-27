/*登录注册*/
function showEnterEnroll(){
//	$("#topWrap .top ul li:nth-child(2)").css('display','none');
//	$("#topWrap .top ul li:nth-child(3)").css('display','none');
//	$("#topWrap .top ul li:nth-child(4)").css('display','none');
	$("#topWrap .top ul li:nth-child(1) a").css('display','block');
	$('#topWrap .top .enter-list li:nth-child(2) a').mouseenter(function(){
		$('#topWrap .top .enter-list li .secondary-menu').animate({
			height : 78
		});
		$('#topWrap .top .enter-list li .secondary-menu').css('display','block');
	});
	$('#topWrap .top .enter-list li .secondary-menu').mouseenter(function(){
		$(this).css('display','block');
	});
	$('#topWrap .top .enter-list li:nth-child(2) a').mouseout(function(){
		$('#topWrap .top .enter-list li .secondary-menu').animate({
			height : 0
		});
		$('#topWrap .top .enter-list li .secondary-menu').css('display','none');
	})
}
showEnterEnroll();
/*导航*/
function navHover(){
	$('#navWrap .nav ul li:nth-child(3) a').addClass('active');
	$('#navWrap .nav ul li a').mouseenter(function(){
		$(this).addClass('active');
	});
	$('#navWrap .nav ul li a').click(function(){
		$('#navWrap .nav ul li:nth-child(3) a').removeClass('active');
		$(this).addClass('change').parent().siblings().children('a').removeClass('change')
	});
	$('#navWrap .nav ul li a').mouseleave(function(){
		$(this).not('#navWrap .nav ul li:nth-child(3) a').removeClass('active')
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