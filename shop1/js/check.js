var WIDGETS ={
	imgSmoothCheck :undefined,//图片滑动验证
}
var _widgets = {default:{noop:function(){ }}};

WIDGETS.imgSmoothCheck = function (options){
	options = $.extend({
		selector:".widgets_img_check_box",
		imgSrc:[], //图片资源
		imgWidth:undefined, //图片宽
		imgHeight:undefined, //图片高
		imgFragmentW:undefined, //碎片宽
		imgFragmentH:undefined, //碎片高
		allowableErrorValue:4, //允许的误差值
		success:_widgets.default.noop, //验证成功后
		error:_widgets.default.noop //验证失败后
	}, options || {});
	
	var $sel  = $(options.selector);
	if(!$sel) return;
	var _data = options.data[0];
	
	//随机获取图片
	function _getRandomChoosingImg(imgData){
		var index = Math.floor(imgData.length * Math.random());
		return imgData[index];
	};
	
	//初始化原图
	function _initImgSrc($srcImg,strSrc){
		$srcImg.attr("src",strSrc);
		if(options.imgWidth){
			$srcImg.attr("width",options.imgWidth);
		}
		if(options.imgHeight){
			$srcImg.attr("height",options.imgHeight);
		}
	}
	
	//获取随机位置
	function _getRandomStartPosition(numW,numH,numClipW,numClipH,numCurveR){
		var minX = numClipW + numCurveR;
		var maxX = numW - numClipW -20;
		var minY = numCurveR;
		var maxY = numH - numClipH -numCurveR;
		var position = {};
		position.x = Math.random() * (maxX - minX) + minX;
		position.y = Math.random() * (maxY - minY) + minY;
		return position;
	}
	
	function _calBestClipWidth(numW){
		return numW / 6;
	}
	
	//画出碎片模型
	function _canvasDrawPath(ctx,numStartX,numStartY,numClipWidth,numClipHeight,numCurveR){
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0,0,0,0)";
		//向右横向画线
		ctx.moveTo(numStartX,numStartY);
		ctx.lineTo(numStartX + (numClipWidth / 2) - numCurveR,numStartY);
		ctx.bezierCurveTo(numStartX+(numClipWidth/2)-numCurveR , numStartY-numCurveR,numStartX+(numClipWidth/2)+numCurveR,numStartY-numCurveR,numStartX+(numClipWidth/2)+numCurveR,numStartY);
		ctx.lineTo(numStartX + numClipWidth,numStartY);
		//向下纵向画线
		ctx.lineTo(numStartX +numClipWidth,numStartY + (numClipHeight / 2) - numCurveR);
		ctx.bezierCurveTo(numStartX+numClipWidth-numCurveR , numStartY+(numClipHeight/2)-numCurveR,numStartX+numClipWidth-numCurveR,numStartY+(numClipHeight/2) + numCurveR, numStartX+numClipWidth ,numStartY + (numClipHeight / 2)+numCurveR);
		ctx.lineTo(numStartX + numClipWidth,numStartY+numClipHeight);
		//向左横向画线
		ctx.lineTo(numStartX,numStartY + numClipHeight);
		ctx.closePath();
	}
	
	function _drawCanvas(canvasOption){
		var numClipWidth = canvasOption.clipW,numClipHeight = canvasOption.clipH;//剪切的宽高
		var numCurveR = numClipWidth / 3 / 2;//曲线的半径
		var position = canvasOption.position;
		var numStartX = position.x,numStartY = position.y;//起始位置
		var sImgSrc = canvasOption.img;
		
		var $cavImgFramentHollow  = $sel.find("canvas.widgets_img_fragment_hollow");//凹陷的图片
		var $cavImgFramentContent  = $sel.find("canvas.widgets_img_fragment_content");//获取图片碎片
		var $cavImgFramentShadow  = $sel.find("canvas.widgets_img_fragment_shadow");//获取图片碎片阴影
		var ctxImgFramentHollow = $cavImgFramentHollow[0].getContext("2d");
		var ctxImgFramentContent = $cavImgFramentContent[0].getContext("2d");
		var ctxImgFramentShadow = $cavImgFramentShadow[0].getContext("2d");
		
		$cavImgFramentHollow.attr("width",numImgWidth +"px");
		$cavImgFramentHollow.attr("height",numImgHeight +"px");
		
		$cavImgFramentContent.attr("width",numImgWidth +"px");
		$cavImgFramentContent.attr("height",numImgHeight +"px");
		
		$cavImgFramentShadow.attr("width",numImgWidth +"px");
		$cavImgFramentShadow.attr("height",numImgHeight +"px");
		
		$sel.find(".widgets_img_cnt").css("width",numImgWidth+"px");
		$sel.find(".widgets_img_display").css("width",numImgWidth+"px");
		$sel.find(".widgets_smooh_cnt").css("width",numImgWidth+"px");
		
		//碎片凹陷
		_canvasDrawPath(ctxImgFramentHollow,numStartX,numStartY,numClipWidth,numClipHeight,numCurveR)
		ctxImgFramentHollow.globalCompositeOperation = "xor";
		ctxImgFramentHollow.shadowBlur = 10;
		ctxImgFramentHollow.shadowColor = "#fff";
		ctxImgFramentHollow.shadowOffsetX = 3;
		ctxImgFramentHollow.shadowOffsetY = 3;
		ctxImgFramentHollow.strokeStyle = "rgba(0,0,0,.7)";
		ctxImgFramentHollow.fillStyle = "rgba(0,0,0,.5)";
		ctxImgFramentHollow.fill();
		ctxImgFramentHollow.stroke();
		
		$sel.find(".widgets_img_fragment_cnt").css("left",-position.x);
		
		//碎片内容
		_canvasDrawPath(ctxImgFramentContent,numStartX,numStartY,numClipWidth,numClipHeight,numCurveR);
		ctxImgFramentContent.stroke();
		ctxImgFramentContent.clip();
		
		//碎片阴影
		_canvasDrawPath(ctxImgFramentShadow,numStartX,numStartY,numClipWidth,numClipHeight,numCurveR);
		ctxImgFramentShadow.shadowBlur = 18;
		ctxImgFramentShadow.shadowColor = "black";
		ctxImgFramentShadow.fill();
		ctxImgFramentShadow.stroke();
		
		var img = new Image();
		img.onload = function(e){
			ctxImgFramentContent.drawImage(img,0,0,numImgWidth,numImgHeight);
		}
		img.src = sImgSrc;
		return position;
	}
	
	var $srcImg = $sel.find("img.widgets_img_src");//原图
	var sSrcImgSrc = _getRandomChoosingImg(options.data);
	_initImgSrc($srcImg,sSrcImgSrc);
	var numImgWidth = $srcImg.width();
	var numImgHeight = $srcImg.height();
	//初始化canvas
	//剪切的宽高
	var numClipWidth = options.imgFragmentW === undefined ? _calBestClipWidth(numImgWidth) : options.imgFragmentW;
	var numClipHeight = options.imgFragmentH === undefined ? _calBestClipWidth(numImgWidth) : options.imgFragmentH;
	var numCurveR = numClipWidth / 3 /2;
	var position = _getRandomStartPosition(numImgWidth,numImgHeight,numClipWidth,numClipHeight,numCurveR);
	var numStartX = position.x;
	var numStartY = position.y;
	var canvasOption = {
		position : position,
		clipW : numClipWidth,
		clipH : numClipHeight,
		width : numImgWidth,
		height : numImgHeight,
		img : sSrcImgSrc
	}
	_drawCanvas(canvasOption);
	var blnIsMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
	
	var $smoothCir = $sel.find(".widgets_smooh_circle");//获取滑动的圈
	var $imgFragmentCnt = $sel.find(".widgets_img_fragment_cnt");
	var flag = false;
	//获取滑动按钮左边距离
	var strDefualtLeft = $smoothCir.css("left");
	var numDefualtLeft = parseFloat(strDefualtLeft.substring(0,strDefualtLeft.lastIndexOf("px")));
	//获取图片坐边距离
	var strImgFragmentCntDefualtLeft = $imgFragmentCnt.css("left");
	var numImgFragmentCntDefualtLeft = parseFloat(strImgFragmentCntDefualtLeft.substring(0,strImgFragmentCntDefualtLeft.lastIndexOf("px")));
	var numStartPointLeft = -1; //设置初始值
	
	var sSmoothStart = "mousedown";
	var sSmoothMove = "mousemove";
	var sSmoothEnd = "mouseup";
	
	if(blnIsMobile){
		sSmoothStart = "touchstart";
		sSmoothMove = "touchmove";
		sSmoothEnd = "touchend";	
	}
	
	var _numMoveLength = -1;
	$smoothCir.on(sSmoothStart,function(){
		var strLeft = $smoothCir.css("left");
		var numCurrentLeft =parseFloat(strLeft.substring(0,strLeft.lastIndexOf("px")));
		//如果当前的滑动按钮和初始一样 则可以触发移动
		if(flag === false && numCurrentLeft == numDefualtLeft){
			flag = true;
		}
	});
	$smoothCir.on(sSmoothEnd,function(){
		_dealAfterSmoothEnd();
	})
	
	var $smoothCnt = $sel.find(".widgets_smooh_cnt");
	$smoothCnt.on(sSmoothMove,function(evt){
		evt.preventDefault();
		var strLeft = $smoothCir.css("left");
		var numCurrentLeft =parseFloat(strLeft.substring(0,strLeft.lastIndexOf("px")));
		if(flag === true){
			var numPageX = blnIsMobile ? evt.targetTouches[0].pageX : evt.pageX;
			var numMoveLength = 0;
			if(numCurrentLeft === numDefualtLeft){
				numStartPointLeft = numPageX;
				//第一次触动移动默认滑动0.1个距离，防止每次获取的做边距都等于默认的左边距
				numMoveLength = numDefualtLeft + 0.1; 
			}else{
				numMoveLength = numPageX - numStartPointLeft;
			}
			_numMoveLength = numMoveLength;
			if(numMoveLength < numDefualtLeft) return; //不能小于默认值
			//移动距离不能大于图片的宽度
			if(numMoveLength + numClipWidth >= numImgWidth){
				_dealAfterSmoothEnd()
				return;
			}
			$smoothCir.css("left",numMoveLength +"px");
			$imgFragmentCnt.css("left",numMoveLength+numImgFragmentCntDefualtLeft+"px");
		}
	});
	$smoothCnt.on("mouseleave",function(){
		_dealAfterSmoothEnd();
	})
	$smoothCnt.on("mouseup",function(){
		_dealAfterSmoothEnd();
	})
	
	//刷新
	$sel.find(".widgets_icon_refresh").on("click",function(){
		_refresh();
	})
	
	function _dealAfterSmoothEnd(){
		if(flag === true){
			flag = false;
			if(_checkImgCheckIsSuccess()){
				options.success();
			}else if(_numMoveLength > 1){
				options.error("验证失败！")
				_refresh();
			}else{
				$imgFragmentCnt.css("left",-position.x);
				$smoothCir.css("left",numDefualtLeft + "px");
				numImgFragmentCntDefualtLeft = -position.x;
			}
		}
	}
	//检查图片验证是否成功
	function _checkImgCheckIsSuccess(){
		var numAllowableError = options.allowableErrorValue; //获取允许的误差值
		var sLeft = $imgFragmentCnt.css("left");
		var numLeft = parseFloat(sLeft.substring(0,sLeft.lastIndexOf("px")));
		if(numLeft < numAllowableError && numLeft > -numAllowableError){
			return true;
		}
		return false;
	}
	//刷新
	function _refresh(){
		var $srcImg = $sel.find("img.widgets_img_src");//获取原图
		var strImgSrc = _getRandomChoosingImg(options.data);
		$srcImg.attr("src",strImgSrc);
		position = _getRandomStartPosition(numImgWidth,numImgHeight,numClipWidth,numClipHeight,numCurveR);
		canvasOption.img = strImgSrc;
		canvasOption.position = position;
		_drawCanvas(canvasOption);//开始绘图
		
		$imgFragmentCnt.css("left",-position.x);
		$smoothCir.css("left",numDefualtLeft + "px");
		numImgFragmentCntDefualtLeft = -position.x;
		flag = false;
	}
	this.refresh = function(){
		_refresh()
	}
	return this;
}
