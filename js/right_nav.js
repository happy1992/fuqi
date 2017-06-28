$(document).ready(function(){
	/*最新动态左侧导航点击动画*/
	(function(){
		var k=null;
		$(".sub_menu_li").click(function(ev){
			if (k && k!==ev.target) {     //判断之前是不是有过点击事件，且点击对象不是当前点击对象，是真就关闭所有div
				$(".sub_menu_li").next().slideUp();
			}
			$(this).next().slideToggle("slow");  //给当前点击对象一个闭合打开动画事件
			k=ev.target;
		 });
	})();

});