/*登录注册*/
function showEnterEnroll(){
//	$("#topWrap .top .enter-list li:nth-child(1)").css('display','none');
//	$("#topWrap .top .enter-list li:nth-child(2)").css('display','none');
//	$("#topWrap .top .enter-list li:nth-child(3)").css('display','none');
//	$("#topWrap .top .enter-list li:nth-child(4) a").css('display','none');
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
		var strRight = `<a href="#"><img src="img/${msg.carouselRight}"/></a>
						<div class="carousel-right-mark"></div>`;
		for(var i in msg){
			for(var j = 0,len = msg.carousel.length;j < len;j++){
				str += `<li><a href="#"><img src="img/${msg.carousel[j]}" id="carousel-right-img"/></a></li>`;
			}
		}
		$("#carouselPic").html(str);
		$(".carousel-right").html(strRight);
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
	$('.carousel-right').mouseover(function(){
		$('.carousel-right-mark').css('background','rgba(0,0,0,0.1)')
	});
	$('.carousel-right').mouseout(function(){
		$('.carousel-right-mark').css('background','')
	});
}
carousel();
/*大家喜欢版块2019.03.23*/
function likeCases(){
	$.getJSON('./json/index.json',function(msg){
		var str1 = '';
		var str2 = msg.likecase;
		for(var key in str2){
			var str3 = str2[key];
			str1 += `<li>
						<div id="likeCase">
							<a href="#"><img src="img/${str3.headportrait}" alt=""></a>
							<h3><em>${str3.username}</em></h3>
							<p>
								<span id="likeTimes">${str3.liketime}分钟前</span>
								<i class="iconfont">&#xe506;</i>喜欢了
								<em id="likeNumber">${str3.likenum}</em>商品
							</p>
							<ul>
								<li><a href="#" id="likeImgNum"><img src="img/${str3.commodity}" alt=""></a></li>
							</ul>
						</div>
					</li>`;
		}
		$('#likeCenter').html(str1);
	});
	$('#likeCaseLeft').on({
		"mouseover" : function(){
			$("#likeCaseLeftI").animate({"marginLeft" : "50px"});
		},
		"mouseleave" : function(){
			$("#likeCaseLeftI").animate({"marginLeft" : "0px"});
		}
	})
	
}
likeCases();
/*设计师版块2019.03.23*/
function stylistCases(){
	$.getJSON('./json/index.json',function(msg){
		var str1 = '';
		var str2 = msg.stylist;
		for(var key in str2){
			var str3 = str2[key];
			str1 += `<dl>
						<dt><a href="#"><img src="img/${str3.stylistpic}" alt=""></a></dt>
						<dd><a href="#">${str3.stylisttxt}</a></dd>
					</dl>`;
		}
		$('.stylist-cases').html(str1);
	});
}
stylistCases();
/*手工艺人版块2019.03.25*/
function handicraftCases(){
	$.getJSON('./json/index.json',function(msg){
		var str1 = '';
		var str2 = msg.handicraft;
		for(var key in str2){
			var str3 = str2[key];
			str1 += `<dl id="handicraft-case-four">
						<dt>
							<a href="#"><img src="img/${str3.handicraftpic}" alt=""></a>
							<a href="#" class="handicraft-img"><img src="img/${str3.handicraftimg}" alt=""></a>
						</dt>
						<dd>
							<a href="#">${str3.handicrafttxt}<em><span>${str3.handicraftnum}</span>人关注</em></a>
							<i class="iconfont">&#xe61e;</i>
						</dd>
					</dl>`;
		}
		$('.handicraft-cases').html(str1);
	});
}
handicraftCases();