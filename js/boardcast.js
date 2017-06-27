$(function(){
	/*默认按分速成绩排序*/
	$(".sear>ul>li>a:eq(0)").addClass("sear_active");
	/*指定赛点击后样式*/
	$(".cpt li a").click(function(){
		$(".sear>ul>li>a").removeClass("sear_active");
		$(".cpt li a").removeClass("cpt_active");
		$(this).addClass("cpt_active");
	});
	/*排序点击后样式*/
	$(".sear>ul>li>a").click(function(){
		$(".sear>ul>li>a").removeClass("sear_active");
		$(".cpt li a").removeClass("cpt_active");
		$(this).addClass("sear_active");
	});
	/*表格隔10行变色*/
	for (var i = 0,$len_form_tr=$(".form table tr").length; i < ($len_form_tr/10+1); i++) {
		console.log(i);
		if (i%2 != 0) {
			for (var j = 1; j < 11; j++) {
				$(".form table tr").eq(10*i+j).prop("style","background:#fef7f7");
			};
		};
	};
});