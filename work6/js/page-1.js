//banner
~function(){
				
    //var $tabLi = $('#banner .tab ul li');
    var $picUl = $('#banner ul');
    var $btnDiv = $('#banner .btn div');
    var $banner = $('#banner');
    var index = 0;
    var timer = null;
    var nowTime = 0;

    auto();
    $btnDiv.click(function(){
        if ( new Date() - nowTime > 500 )
        {
            nowTime = new Date();
            var i = $(this).index();
            i?index++:index--;
            change();
        }
    });

    $banner.hover(function(){
        clearInterval( timer );
    },auto);

    function auto(){
        timer = setInterval(function(){
            index ++;
            change();
        },3000);
    };
    function change(){
        //index >= $tabLi.length?$tabLi.eq(0).addClass('on').siblings().removeClass('on'):$tabLi.eq(index).addClass('on').siblings().removeClass('on');
        $picUl.stop().animate({
            marginLeft : -(index+1)*1245+'px'
        },300,function(){
            if ( index == 3 )
            {
                index = 0;
                $picUl.css('marginLeft' , '-1245px');
            }else if ( index == -1 )
            {
                index = 2;
                $picUl.css('marginLeft' , -(index+1)*1245+'px');
            }
        });
    };


}();