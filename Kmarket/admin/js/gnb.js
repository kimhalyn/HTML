$(function(){
    var gnb = $('.gnb > li > a');
    
    gnb.click(function(e){
        e.preventDefault();  //해당 태그의 기본 동작을 막음

        var isOpne = $(this).next().is(':visible');
        
        if(isOpne){
            $(this).next().slideUp(200);
        }else{
            $(this).next().slideDown(200);
        }
    });
});