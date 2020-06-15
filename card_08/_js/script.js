$(function(){
    var articleItems1 = $('.content .custom_article').length;
    var articleItems2 = $('.content .perigo_article').length;
    var articleItems3 = $('.content .preventiva_article').length;
    var articleItems4 = $('.content .corretiva_article').length;
    var articleItems5 = $('.content .backup_article').length;
    var articlePosition = 1;
    
    $('.content .article').hide();
    $('.content .article:first').show();
    
    $('.custom').click(nextSlider);
    $('.pregigo').click(nextSlider);
    $('.preventiva').click(nextSlider);
    $('.corretiva').click(nextSlider);
    $('.backup').click(nextSlider);
    
    function nextSlider(){
        if(articlePosition >= articleItems1){articlePosition = 1;}
        else{articlePosition++;}
        if(articlePosition >= articleItems2){articlePosition = 2;}
        else{articlePosition++;}
        if(articlePosition >= articleItems3){articlePosition = 3;}
        else{articlePosition++;}
        if(articlePosition >= articleItems4){articlePosition = 4;}
        else{articlePosition++;}
        if(articlePosition >= articleItems5){articlePosition = 5;}
        else{articlePosition++;}
                        
        $('.content .article').hide();
        $('.content .article:nth-child('+ articlePosition +')').fadeIn();
    }
});