$(function(){
	/*头部导航 js*/
	/*$(".nav ul:eq(0)>li>a").click(function(){
		$(".nav ul:eq(0)>li>a").removeClass("menuitem");
		$(this).addClass("menuitem");
	});*/

	/* 
	头部导航 js 
	*/
	$(".nav_fq1 li").hover(function(){
		$(this).find("ul").stop().slideDown();	
	},function(){
		$(this).find("ul").stop().slideUp();	
	});

	/*
	右悬框 鼠标滑过 js
	*/
	$(".youxuan_gl").hover(function(){
		$(this).find("div").show();	
	},function(){
		$(this).find("div").hide();	
	});	

	/*
	右悬框 经纬度计算两地距离 js
	*/
	var countDis1 = new countDis({
		startLon:'.startLongi',   //起点经度框
		startLa:'.startLagi',    //起点纬度框
		endLon:'.endLongi',   //终点经度框
		endLa:'.endLagi',    //终点纬度框
		distance:'.distance',   //计算结果框
		subM:'.yx_btn',    //提交框
		reset:'.cClear',  //重置框
		defau:'.setDef'    //设置默认值框
 	});
	function countDis(obj){
		var that = this;
		that.startLon = $(obj.startLon);   //起点经度框
		that.startLa = $(obj.startLa);   //起点纬度框
		that.endLon = $(obj.endLon);    //终点经度框
		that.endLa = $(obj.endLa);    //终点纬度框
		that.distance = $(obj.distance);   //计算结果框
		that.subM = $(obj.subM);    //提交框
		that.reset = $(obj.reset);    //重置框
		that.defau = $(obj.defau);    //设置默认值框
		that.init = function(){
			//为提交框绑定事件
			that.subM.on('click',that.count);

			//为重置框绑定事件
			that.reset.on('click',that.res);

			//为设置默认值框绑定事件
			that.defau.on('click',that.def);

		};

	    //计算距离
	    that.count = function (){
	        var startLongi = rad(getVal(that.startLon));   //起点经度
	        var startLagi = rad(getVal(that.startLa));    //起点纬度
	        var endLongi = rad(getVal(that.endLon));   //终点经度
	        var endLagi = rad(getVal(that.endLa));    //终点纬度
	        var a = startLagi - endLagi;   //两点纬度之差
	        var b = startLongi - endLongi;   //两点经度之差
	        var distance = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(startLagi)*Math.cos(endLagi)*Math.pow(Math.sin(b/2),2))) * 6378.137;
	        distance = Math.round(distance*10000)/10000; 
	        that.distance.val(distance);
	    };

	    //重置事件
	    that.res = function (){
	    	that.startLon.val('');
	    	that.startLa.val('');
			that.endLon.val('');
			that.endLa.val('');
			that.distance.val('');
	    }

	   //设置默认经纬度
	    that.def = function (){
	    	var arr1=[114,17,44];
	    	var arr2=[30,34,56];
	    	for (var i = 0; i < that.endLon.length; i++) {
	    		that.endLon.eq(i).val(arr1[i]);
	    	};
	    	for (var i = 0; i < that.endLa.length; i++) {
	    		that.endLa.eq(i).val(arr2[i]);
	    	};
	    }


		//获得经纬度数值
		function getVal(m){
			var arr=[];
			for (var i = 0; i < m.length; i++) {
				arr.push(m.eq(i).val());
			};
			return swm.apply(null,arr);
		}

		//将度分秒转换成度
		function swm(a,b,c){
			var deg =a * 1 +( c*1 + b*60 )/3600 ;
			return deg;
		}

		//经纬度转换成三角函数中度分表形式
		function rad(d){
	       return d * Math.PI / 180.0;
	    }

		that.init();
	}


	/* 返回顶部 js*/
	$("#fix_btn").click(function() {
	    $("html,body").animate({scrollTop:0}, 300);
	}); 

	window.onscroll = function(){
		var t = document.documentElement.scrollTop||document.body.scrollTop;
		if (t>200) {
			$("#fix_btn").css("display","block");
		} else {
			$("#fix_btn").css("display","none");
		};
	}



})