$(function(){
	/*鸽王图片切换*/
	var $cont_st_ul = $(".cont_st ul");   //大图容器
	var $cont_st_li = $(".cont_st ul li").length;
	var $contst_li_len = $(".cont_st").width();
	var $swp_list_ul = $(".swp_list_ul");      //缩略图容器
	var $swp_list_li = $(".swp_list_ul li");      //缩略图容器
	var $swp_li_len = $(".swp_list_cont li").outerWidth();  //缩略图子元素宽度
	var countP = 0;
	var leftstan = 0;   //大图距其父级左边距离
	var leftli = 0;	//缩略图图距其父级左边距离
	var thu = 0;  //缩略图计数
	$(".arrRight").on("click",function(){
		if (!$cont_st_ul.is(":animated")) {
			if(leftstan <= (-($cont_st_li-1)*$contst_li_len)){
				alert("这是最后一张了");
			}else{
				leftstan -= $contst_li_len;
				countP++;
				$cont_st_ul.stop().animate({left:(leftstan+"px")},200);   //大图向右偏移
				$swp_list_ul.stop().animate({left:(leftli+"px")},200);   //缩略图位置重置
				$swp_list_li.removeClass('pj').eq(countP).addClass('pj');
				if(countP > 3 && $swp_list_li.length > 5 && countP < $swp_list_li.length-1){   //判断缩略图位置
					leftli -= $swp_li_len;
					$swp_list_ul.stop().animate({left:(leftli+"px")},200);
				}
			};
		};
	});
	$(".arrLeft").on("click",function(){
		if (!$cont_st_ul.is(":animated")) {
			if(leftstan >= 0){
				alert("这已经是第一张了");
			}else{
				leftstan += $contst_li_len;
				countP--;
				$cont_st_ul.stop().animate({left:(leftstan+"px")},200);   //大图向左偏移
				/*$swp_list_ul.animate({left:(leftli+"px")},200);*/
				$swp_list_ul.stop().animate({left:(leftli+"px")},200);   //缩略图位置重置
				$swp_list_li.removeClass('pj').eq(countP).addClass('pj');   
				if(leftli !=0 && countP < $swp_list_li.length-2){    //判断缩略图位置
					leftli += $swp_li_len;
					$swp_list_ul.stop().animate({left:(leftli+"px")},200);
				}
			};
		};
	});
	
	$(".skim_right").on("click",function(){
		if (!$swp_list_ul.is(":animated")) {
			if((parseInt($swp_list_ul.css("left"))+$swp_li_len*$swp_list_li.length) <= $swp_list_ul.parent().width()){
				return false;
			} else {
				thu -= $swp_li_len*2;
				$swp_list_ul.stop().animate({left:(thu+"px")},200);
			};
		};
	});
	$(".skim_left").on("click",function(){
		if (!$swp_list_ul.is(":animated")) {
			if (-thu < $swp_li_len*2) {
				$swp_list_ul.css("left","0px");
			} else {
				thu += $swp_li_len*2;
				$swp_list_ul.stop().animate({left:(thu+"px")},200);
			};
		};
	});
	
	$swp_list_li.find("img").on("click",function(ev){
		for (var i = 0; i < $swp_list_li.length; i++) {
			if($swp_list_li[i] == ev.target.parentNode){
				var index = i;
			}
		};
		countP = index;
		$(this).parent().siblings().removeClass('pj');
		$(this).parent().addClass('pj');
		leftstan = -$contst_li_len*index;
		leftli = parseInt($swp_list_ul.css("left"));
		$cont_st_ul.css("left",leftstan+"px");
		/*console.log(leftli);*/
	});
});