$(function (){
    $('.menu_item').mouseenter(function () {
        
    if($(window).width() >= 500){    
    $(this).css({borderBottom: '0 solid #28c06d',color: '#28c06d'}).animate({
        borderWidth: 2
    }, 150);
    }
    
    
    $(this).find('.mega_menu').show();
    $(this).find('.mega_menu').animate({
        top: "100%"
    }, 30);
    
    $(this).find('.sub_menu').show();
    $(this).find('.sub_menu').animate({
        top: "58px"
    }, 30);
    
    }).mouseleave(function () {
        
     if($(window).width() >= 500){ 
     $(this).css({borderBottom: '0 solid #28c06d',color: 'black'}).animate({
        borderWidth: 0
    }, 150);
     }
     
    
    
    $(this).find('.mega_menu').hide();
    $(this).find('.mega_menu').animate({
        top: "150%"
    }, 30);
    
    $(this).find('.sub_menu').hide();
    $(this).find('.sub_menu').animate({
        top: "100px"
    }, 30);
    
    });
    isMenuHidden = true;
    $('.nav_mobile img').click(function (){
        if(isMenuHidden){
            $('.menu').show();
                $('.menu').animate({
                    marginTop: "30px"
            }, 250);
            isMenuHidden = false;
        }
        else{
            $('.menu').hide();
                $('.menu').animate({
                    marginTop: "300px"
            }, 250);
            isMenuHidden = true;
        }
    });
    
    
    $('.mega_menu_item').click(function (){
       $('.sub_mega_menu:visible').hide();
       $(this).find('.sub_mega_menu').show();
    });
    
    
});