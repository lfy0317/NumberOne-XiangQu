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
