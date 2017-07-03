$(function(){

	/*
    赛事预告标题循环滚动动画 start
    */
	$('.dua_tittle h1:eq(0)').clone().appendTo($('.dua_tittle'));   //取盒子下第一个h1标签，克隆一份放到盒子末端
	var duaWidth = $('.dua_tittle h1:eq(0)').css('width');     //获取h1标签的宽度，若是有多个循环对象，则要用循环获取除克隆对象以外所有对象总宽度
	function titlSlide(){
		$('.dua_tittle').css('left','0px');
		$('.dua_tittle').animate({left:'-'+duaWidth},15000,'linear',titlSlide);  //用animate()方法定制动画效果，最后两个参数分别是动画的过渡效果和动画执行完后执行的回调函数
	}
	titlSlide();


	/*
    赛事预告倒计时 start
    */
	function countTime(){
        var d = new Date();
        var count_arr1=[]; //将比赛开始时间和结束时间放在数组里
        var count_arr2=[];
        function getStartTime(m,n){   //获取设置的比赛开始时间和结束时间
            for (var i = 0; i < $("h3:eq(0) span[class^="+m+"]").length; i++) {  
                n.push(parseInt($("h3:eq(0) span[class^="+m+"]").eq(i).text()));
            };
        }
        getStartTime('sta',count_arr1);
        getStartTime('end',count_arr2);
        count_arr1[1] -=1; //将格林尼治时间月份是从0开始计算的，所以要-1
        count_arr2[1] -=1;
        /*var sta_time = Date.UTC.apply(null,count_arr1)+d.getTimezoneOffset()*60000;*/  //比赛开始时间，用apply将数组转为参数列表，new Date()是本地时间，要将格林尼治时间转换成本地时间
        /*var end_time = Date.UTC.apply(null,count_arr2)+d.getTimezoneOffset()*60000;*/  //比赛结束时间，new Date()是本地时间，要将格林尼治时间转换成本地时间
        var sta_time = Date.UTC(2019,5,28,13,0,0)+d.getTimezoneOffset()*60000;
        var end_time = Date.UTC(2019,5,30,13,0,0)+d.getTimezoneOffset()*60000;
        var now_time = Date.parse(d);
        var lev_time_sta = sta_time - now_time;   //比赛开始的剩余时间=开始时间-现在时间
        var lev_time_end = end_time - now_time;   //比赛结束的剩余时间=结束时间-现在时间
        var lev_second = lev_time_sta/1000%60;   //剩余秒数=差值/1000/取60的模
        var lev_minutes = parseInt(lev_time_sta/1000/60)%60;   //剩余分钟
        var lev_hours = parseInt(lev_time_sta/1000/60/60)%24;   //剩余小时
        var lev_date = parseInt(lev_time_sta/1000/60/60/24);   //剩余天数
        if (lev_time_sta>0) {    //比赛开始的剩余时间大于0时，显示剩余时间
            $('.leaveTime').html("<span class='lev_date'>"+lev_date+"</span>天<span class='lev_hours'>"+lev_hours+"</span>时<span class='lev_minutes'>"+lev_minutes+"</span>分<span class='lev_second'>"+lev_second+"</span>秒");
        } else if(lev_time_sta<0 && lev_time_end>0){  //比赛开始的剩余时间<0且比赛结束的剩余时间>0,显示比赛进行中
            $('.leaveTime').html('比赛进行中...');
        } else if(lev_time_end<0){       //比赛结束的剩余时间<0,显示比赛结束
            $('.leaveTime').html('比赛结束');
        };
    }
    setInterval(countTime,1000);

    /*
    轮播图 start
    */
    var kk=new banSlider({
        banContainer:'.slider',   //轮播图容器
        banChild:'.slider_ul li',   //轮播元素下面的li
        autoPlay:true,   //是否自动播放,默认自动播放
        playSpeed:3000    //播放速度，默认3秒
    });

 	 
})