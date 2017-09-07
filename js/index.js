/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/4.
 */
/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/5.
 */
$(function(){
    /*轮播图*/
    banner();

    $('.sn_advert img').addClass('swing animated').click(function(){
        $(this).parent().hide();
    });

});

/*轮播图*/
function banner(){
    /*
     * 1.自动轮播
     * 2.点对应滚动
     * 3.随手势  进行上一张  下一张 切换
     * */

    /*获取元素*/
    var $banner = $('.sn_banner');
    /*宽度*/
    var width = $banner.width();
    /*图片盒子*/
    var $imageBox = $banner.find('ul:first');/*如果使用扩展性的选择器必须添加selector模块*/
    /*点盒子*/
    var $point = $banner.find('ul:eq(1)');

    var animateFuc = function(callback){
        $imageBox.animate({'transform':'translateX('+(-index*width)+'px)'},300,'linear',function(){

            if(index >= 9){
                index = 1;
                /*瞬间定位*/
                $imageBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                /*瞬间定位*/
                $imageBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*2.点对应滚动*/
            $point.find('li').removeClass('active').eq(index-1).addClass('active');

            callback && callback();
        });

    }

    /*1.自动轮播*/
    var index = 1;
    var timer = setInterval(function(){
        index ++ ;

        animateFuc();

    },5000);

    /*3.随手势  进行上一张  下一张 切换*/
    $imageBox.on('swipeLeft',function(){
        clearInterval(timer);
        /*下一张*/
        index ++;

        animateFuc(function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index ++ ;

                animateFuc();

            },5000);
        });

    });
    $imageBox.on('swipeRight',function(){
        clearInterval(timer);
        /*上一张*/
        index --;

        animateFuc(function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index ++ ;

                animateFuc();

            },1000);
        });
    });

}