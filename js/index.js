/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/4.
 */
/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/5.
 */
$(function(){
    /*�ֲ�ͼ*/
    banner();

    $('.sn_advert img').addClass('swing animated').click(function(){
        $(this).parent().hide();
    });

});

/*�ֲ�ͼ*/
function banner(){
    /*
     * 1.�Զ��ֲ�
     * 2.���Ӧ����
     * 3.������  ������һ��  ��һ�� �л�
     * */

    /*��ȡԪ��*/
    var $banner = $('.sn_banner');
    /*���*/
    var width = $banner.width();
    /*ͼƬ����*/
    var $imageBox = $banner.find('ul:first');/*���ʹ����չ�Ե�ѡ�����������selectorģ��*/
    /*�����*/
    var $point = $banner.find('ul:eq(1)');

    var animateFuc = function(callback){
        $imageBox.animate({'transform':'translateX('+(-index*width)+'px)'},300,'linear',function(){

            if(index >= 9){
                index = 1;
                /*˲�䶨λ*/
                $imageBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                /*˲�䶨λ*/
                $imageBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*2.���Ӧ����*/
            $point.find('li').removeClass('active').eq(index-1).addClass('active');

            callback && callback();
        });

    }

    /*1.�Զ��ֲ�*/
    var index = 1;
    var timer = setInterval(function(){
        index ++ ;

        animateFuc();

    },5000);

    /*3.������  ������һ��  ��һ�� �л�*/
    $imageBox.on('swipeLeft',function(){
        clearInterval(timer);
        /*��һ��*/
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
        /*��һ��*/
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