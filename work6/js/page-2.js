

function show(){
        var $shopping=$('#shopping');
        var $text=$('#page2text input');
        var $btn =$('#page2text button');
        var $num = $text.val();
        
        var $money = $('#shopping span');
        var reg = /^[1-9][0-9]{0,100}$/;
        if($num==0){
            $shopping.css('display','none');
            alert('请输入正确数量！');
            
        }else if(reg.test($num)){
            $money.html($num*195);
            $shopping.css('display','block');
        }else{
            $shopping.css('display','none');
            alert('请输入正确数量！');
            
        }
        };


        var $fda = $('#fda');
        var $cover = $('.cover');
       $('#fda').on('mouseenter','.img' ,function(){
           $cover.css('display','block');
			var coverW = $cover.width();
			var coverH = $cover.height();
			var parentW = $cover.parent().width();
			var parentH = $cover.parent().height();
			var parentL = $cover.parent().offset().left;
	        var parentT = $cover.parent().offset().top;
				var leftMax = parentW-coverW;
				var leftMin = 0;
				var topMax = parentH - coverH;
                var topMin = 0;
                var $big = $('<div class="big" style="width:500px;height:500px;position:absolute;top:40px;left:100%;background:#ddd;overflow:hidden;"></div>');
				var $bigImg = $('<img src="img/dw.png">');
				$big.append($bigImg);
				$fda.append( $big );

				var bigW = $big.width();
				var bigH = $big.height();
				var prop = bigW / coverW;
				console.log(prop);
						
				$bigImg.css({
					width : $(this).width() * prop + 'px',
							height : $(this).height() * prop + 'px'
				});
				//a(e);

				$(document).on('mousemove' , function(e){
					a(e);
				});
				function a(e){
					var left = e.pageX - parentL - coverW/2;
					var top = e.pageY - parentT - coverH/2;
					left = Math.min(left , leftMax);
					left = Math.max(left , leftMin);
					top = Math.min(top , topMax);
					top = Math.max(top , topMin);
					$cover.css({
						left : left + 'px',
						top : top + 'px'
					});

					$bigImg.css({
						top : -prop*top + 'px',
						left : -prop*left + 'px'
						});
                };
				});

    //移出
        $('#fda').mouseleave (function(){
        var $fda = $('#fda');
        var $cover = $('.cover');
		$('#fda .big').remove();
        $cover.css('display','none');
	    });