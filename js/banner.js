
function banSlider(obj){
	var that = this;  //that获得this的作用域 后面都是that 防止干扰
    that.banContainer=$(obj.banContainer); 	//轮播图容器
    that.banChild=$(obj.banChild);   	//轮播元素
    that.autoPlay=obj.autoPlay;     //是否自动播放
    that.playSpeed=obj.playSpeed;   //轮播速度
    that.width = that.banChild.find('img').width();//得到容器的宽度
    that.height = that.banChild.find('img').height();//得到容器的高度
	that.banLen = that.banChild.length;  //轮播元素的长度
	that.count_li = that.banLen;    //轮播计数
	that.duaWidth = that.banLen*that.width;      //轮播器记偏移距离
	that.setInt = null;    //轮播事件
    that.init=function(){   //初始化
	    that.banChild.eq(0).clone().appendTo(that.banChild.parent());  //取盒子下第一个li标签，克隆一份放到盒子尾部

	    that.banChild.css({    //为每一个轮播体添加样式和顺序
                'width':that.width + 'px',
                'height':that.height + 'px',
                'list-style':'none',
                'float':'left'
            });

        /*轮播元素父级设置默认样式*/
        that.banChild.parent().css('left','-'+that.duaWidth+'px');

	    /*增加切换按钮*/
	    that.banContainer.append($("<div class='preBtn'></div><div class='nextBtn'></div>"));

	    /*为切换按钮添加事件*/
	    $('.preBtn').on('click',function(){that.preSwitch()})
	    $('.nextBtn').on('click',function(){that.nextSwitch()})

        /*增加高亮导航*/
        var $navContainer=$("<ul class='navContainer'></ul>");
        that.banContainer.append($navContainer);
        for (var i = 0; i < that.banLen; i++) {
            if(i === 0){
                $("<li class='banActive'></li>").appendTo($navContainer);
            } else{
                $("<li></li>").appendTo($navContainer);
            }
        };

	    /*为每个高亮绑定点击事件*/
	    $('.navContainer li').each(function(index,el){
	        $(this).on('click',function(){
	            if(index == that.count_li){
	                return;
	            } else if(index == 0){
                    $('.navContainer li').removeClass('banActive').eq(0).addClass('banActive');
                    that.banChild.parent().css('left','-'+that.width*that.banLen+'px');
                    that.count_li = that.banLen;
                    that.duaWidth = that.width*that.banLen;
                   /* console.log(that.count_li);
                    console.log(that.duaWidth);*/
                    return;
                } else {/*
	                that.banChild.parent().stop(true,true);*/
	                $('.navContainer li').removeClass('banActive').eq(index).addClass('banActive');
	                that.banChild.parent().css('left','-'+that.width*index+'px');
	                that.count_li = index;
	                that.duaWidth = that.width*index;
                    /*console.log(that.count_li);
                    console.log(that.duaWidth);*/
	            }
	        })
	    });

	    //添加默认轮播时间
	    if(!that.playSpeed){
	    	that.playSpeed = 4000;
	    }
	    /*是否自动播放*/
	    if(that.autoPlay){
	    	that.setInt=setInterval(that.moveTime,that.playSpeed);
	    }

	    //鼠标滑过轮播图事件
	    that.banContainer.hover(function(){
            $('.preBtn').stop().animate({left:'15px'},300);
            $('.nextBtn').stop().animate({right:'15px'},300);
	        if (that.setInt) {
	        	/*console.log('222');*/
	            clearInterval(that.setInt);
	        };
	    },function(){
            $('.preBtn').stop().animate({left:'-57px'},300);
            $('.nextBtn').stop().animate({right:'-57px'},300);
	    	if(that.autoPlay){
		    	/*console.log('111');*/
		        that.setInt=setInterval(that.moveTime,that.playSpeed);
		    }
	    });

    };	
    
    /*自动播放事件*/
    that.moveTime=function(){
        that.resetNext();
        that.duaWidth += that.width;  
        that.count_li++; 
        /*console.log(that.count_li); 
        console.log(that.duaWidth); */ 
        if (that.count_li == that.banLen) {
            $('.navContainer li').removeClass('banActive').eq(0).addClass('banActive');
        } else {
        	$('.navContainer li').removeClass('banActive').eq(that.count_li).addClass('banActive');
        };
        that.banChild.parent().stop().animate({left:'-'+that.duaWidth+'px'},1000,'linear');
        /*console.log('-'+that.duaWidth+'px');*/
    };

   

    /*向前切换按钮事件*/
    that.preSwitch=function(){
        if(!that.banChild.parent().is(':animated')){
            that.resetPre();
            if(that.count_li == that.banLen && that.banChild.parent().css('left') != ('-'+that.duaWidth+'px')){
                that.banChild.parent().stop().animate({left:'0px'},1000,'linear',function(){that.banChild.parent().css('left','-'+that.duaWidth+'px')});
                $('.navContainer li').removeClass('banActive').eq(0).addClass('banActive');
                /*console.log(that.count_li);
                console.log(that.duaWidth);
                console.log('-'+that.duaWidth+'px'); */
            } else {
                that.duaWidth -= that.width;
                that.count_li --; 
                $('.navContainer li').removeClass('banActive').eq(that.count_li).addClass('banActive');
                /*console.log(that.count_li);
                console.log(that.duaWidth);*/
                that.banChild.parent().stop().animate({left:'-'+that.duaWidth+'px'},1000,'linear');
                /*console.log('-'+that.duaWidth+'px');*/  
            }
        }
    }

    /*向后切换按钮事件*/
    that.nextSwitch=function(){
        if(!that.banChild.parent().is(':animated')){
            that.moveTime();
        }
    }

 	/*定义animate回调函数*/
    that.resetNext=function(){
    	if (that.count_li == that.banLen) {
    		that.count_li = -1;
	        that.duaWidth = -that.width;
    		that.banChild.parent().css('left','0px');
    		that.duaWidth += that.width;   //1400 2100 2800 3500 4200
            that.count_li++;
    	}
    }
    that.resetPre=function(){
    	if (that.count_li == 1) {
    		that.count_li = that.banLen;
	        that.duaWidth = that.banLen*that.width;
    	}
    }

    that.init();

}