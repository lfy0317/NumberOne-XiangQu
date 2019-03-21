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
			};
		}
	})
}
enrollUserNameReg();