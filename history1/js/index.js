//banner
~function(){
				
    //var $tabLi = $('#banner .tab ul li');
    var $picUl = $('.sowing ul');
    var $btnDiv = $('.sowing .btn div');
    var $banner = $('.sowing');
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
            marginLeft : -(index+1)*100+'%'
        },300,function(){
            if ( index == 3 )
            {
                index = 0;
                $picUl.css('marginLeft' , '-100%');
            }else if ( index == -1 )
            {
                index = 2;
                $picUl.css('marginLeft' , -(index+1)*100+'%');
            }
        });
    };


}();

/*function bodyright(){
    
    for(var i=2;i<5;i++){
        var $bodyli = $('.bodyli'+i);
        var $text = $("#t"+i);
        console.log($bodyli.html());
            $bodyli.mouseover(function(e){
                console.log(i);
                $('#t1')[0].style.display = 'none';
                $text[0].style.display = 'block';
            });
        
    }
        console.log(2);
        console.log(i);
        
    
    
};

bodyright();


var oBl1 = document.getElementById("bl1");
var oBl2 = document.getElementById("bl2");
var oBl3 = document.getElementById("bl3");
var oBl4 = document.getElementById("bl4");

oBl.onmouseover = function(){
    
};*/