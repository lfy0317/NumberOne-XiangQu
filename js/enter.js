/*注册*/
function enterUserNameReg(){
	$('#enterBtn').click(function(){
		var enterUserNameRegVaule = $('#enterUserName').val();
		var enterUserNameReg = /^1[3|4|5|7|8|9]\d{9}$/;
		if(!enterUserNameReg.test(enterUserNameRegVaule)){
			$('#enterReg').html('你输入的手机号有误！');
		}else if(enterUserNameReg.test(enterUserNameRegVaule)){
			$('#enterReg').html('');
			var enterPasswordRegValue = $('#enterPassword').val();
			var enterPasswordReg = new RegExp(/^[\w!@#%\.\*\/]{6,20}$/);
			if(!enterPasswordReg.test(enterPasswordRegValue)){
				$('#enterReg').html('请输入正确的密码！');
			}else if($.cookie("userName") == $('#enterUserName').val() && $.cookie("passWord") == $('#enterPassword').val()){
				location.href = 'index.html';
			}else if($.cookie("userName") != $('#enterUserName').val()){
				$('#enterReg').html('你输入的账号有误,请重新输入!');
			}else if($.cookie("passWord") != $('#enterPassword').val()){
				$('#enterReg').html('你输入的密码有误,请重新输入!');
			}
		}
	});
	$('#enterUserName').focus(function(){
		$('#enterHint').css({
			"display" : "block",
			"top" : "142px"
		});
	});
	$('#enterUserName').blur(function(){
		$('#enterHint').css({
			"display" : "none"
		});
	});
	$('#enterPassword').focus(function(){
		$('#enterHint').css({
			"display" : "block",
			"top" : "199px"
		});
	});
	$('#enterPassword').blur(function(){
		$('#enterHint').css({
			"display" : "none"
		});
	});
}
enterUserNameReg();