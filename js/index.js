$(function(){
	/*赛事预告标题循环滚动动画*/
	$('.dua_tittle h1:eq(0)').clone().appendTo($('.dua_tittle'));   //取盒子下第一个h1标签，克隆一份放到盒子末端
	var duaWidth = $('.dua_tittle h1:eq(0)').css('width');     //获取h1标签的宽度，若是有多个循环对象，则要用循环获取除克隆对象以外所有对象总宽度
	function titlSlide(){
		$('.dua_tittle').css('left','0px');
		$('.dua_tittle').animate({left:'-'+duaWidth},15000,'linear',titlSlide);  //用animate()方法定制动画效果，最后两个参数分别是动画的过渡效果和动画执行完后执行的回调函数
	}
	titlSlide();
})
/*function loadImage(){
	var img =new Image();
	img.src="../images/11.jpg";
}*/