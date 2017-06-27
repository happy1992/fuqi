$(function(){
	/*鸽王图片切换*/
	$("#efpRightArea").click(function(){
		var $cont_st_ul=$(".cont_st ul");
		var $cont_st_li=$(".cont_st ul li").length;
		var leftstan=parseInt($cont_st_ul.css("left"));
		if(leftstan <= (-10-($cont_st_li-1)*740)){
			alert("后面没有了");
		}else{
			if (!$cont_st_ul.is(":animated")) {
				$cont_st_ul.animate({left:(leftstan-740+"px")},200);
			};
		};
	});
	$("#efpLeftArea").click(function(){
		var $cont_st_ul=$(".cont_st ul");
		var $cont_st_li=$(".cont_st ul li").length;
		var rightstan=parseInt($(".cont_st ul").css("left"));
		if(rightstan == -10){
			alert("前面没有了");
		}else{
			if (!$cont_st_ul.is(":animated")) {
				$cont_st_ul.animate({left:(rightstan+740+"px")},200);
			};
		};
		console.log(rightstan-740+"px");
	});
});