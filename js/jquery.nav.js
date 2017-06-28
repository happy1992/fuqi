$(function(){
	/*头部导航 js*/
	/*$(".nav ul:eq(0)>li>a").click(function(){
		$(".nav ul:eq(0)>li>a").removeClass("menuitem");
		$(this).addClass("menuitem");
	});*/
	$(".fq_1 li").hover(function(){
		$(this).find("ul").stop().slideDown();	
	},function(){
		$(this).find("ul").stop().slideUp();	
	});
	/*右悬框 鼠标滑过js*/
	$(".youxuan_gl").hover(function(){
		$(this).find("div").show();	
	},function(){
		$(this).find("div").hide();	
	});	
	/*返回顶部 js*/
	$("#y_top").click(function() {
	    $("html,body").animate({scrollTop:0}, 300);
	}); 
	/*关闭右悬框 js*/
	$(".youxuan_gl_b:eq(1)").click(function(){
		$(".youxuan:eq(0)").animate({right:"-36px"},300);
		$(".con_min:eq(0)").animate({right:"0px"},300);
	});
	$(".con_min:eq(0)").click(function(){
		$(this).animate({right:"-80px"},300);
		$(".youxuan:eq(0)").animate({right:"0px"},300);
	});
})