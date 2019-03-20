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
		$(this).removeClass('active')
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