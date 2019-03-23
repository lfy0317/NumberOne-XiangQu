function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}

function sport(obj,json,callback){
	//清除计时器
	clearInterval(obj.timer);
	//启动计时器
	obj.timer = setInterval(function(){
		//设置开关
		var stop = true;//假设为true，表明所有的属性都已达到目标
		//遍历对象
		for(var attr in json){
			//获取当前值
			var cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			//计算速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//停止检测
			if(cur !== json[attr]){
				stop = false;
			}
			//设置运动
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		//停止计时器
		if(stop){
			clearInterval(obj.timer);
			if(typeof callback === 'function'){
				callback();
			}
		}
	},30);
}//完美运动框架