function enrollUserNameReg(){
	$('#enrollSub').click(function(){
		var enrollUserNameRegVaule = $('#enrollUserName').val();
		var enrollUserNameReg = /^1[3|4|5|7|8|9]\d{9}$/;
		if(!enrollUserNameReg.test(enrollUserNameRegVaule)){
			$('#enrollReg').html('你输入的手机号有误！');
		}else if(enrollUserNameReg.test(enrollUserNameRegVaule)){
			$('#enrollReg').html('');
			var enrollPasswordRegValue = $('#enrollPassword').val();
			var enrollPasswordReg = new RegExp(/^[\w!@#%\.\*\/]{6,20}$/);
			if(!enrollPasswordReg.test(enrollPasswordRegValue)){
				$('#enrollReg').html('请输入正确的密码！');
			}else if(enrollPasswordReg.test(enrollPasswordRegValue)){
				$('#enrollReg').html('');
				$.cookie('userName');
				if($.cookie('userName') == $("#enrollUserName").val()){
					if(confirm('该用户已注册!请问是否去登陆')){
						location.href = 'enter.html';
					}else{
						$("#enrollUserName").val('');
						$("#enrollPassword").val('');
						location.href = 'enroll.html';
					}
				}else{
					if(confirm("请问是否保存密码？")){
						$.cookie('userName', $("#enrollUserName").val(),{ expires: 30, path: '/' });
						$.cookie('passWord', $("#enrollPassword").val(),{ expires: 30, path: '/' });
						$("#enrollUserName").val('');
						$("#enrollPassword").val('');
						location.href = 'enter.html';
					}else{
						$.cookie('userName', $("#enrollUserName").val());
						$.cookie('passWord', $("#enrollPassword").val());
						$("#enrollUserName").val('');
						$("#enrollPassword").val('');
						location.href = 'enter.html';
					}
				}
			}
		}
	});
	$('#enrollUserName').focus(function(){
		$('#enrollHint').css({
			"display" : "block",
			"top" : "120px"
		});
	});
	$('#enrollUserName').blur(function(){
		$('#enrollHint').css({
			"display" : "none"
		});
	});
	$('#enrollPassword').focus(function(){
		$('#enrollHint').css({
			"display" : "block",
			"top" : "178px"
		});
	});
	$('#enrollPassword').blur(function(){
		$('#enrollHint').css({
			"display" : "none"
		});
	});
}
enrollUserNameReg();