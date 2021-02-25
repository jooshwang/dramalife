$(document).ready(function(){
    // var Btn = ['.musicBtn','.musicBtn1' , '.musicBtn2' , '.musicBtn3' , '.musicBtn4' , '.musicBtn5' ,'.musicBtn6' , '.musicBtn7' ]
    // var Btn , Btn01 , Btn02 , Btn03 , Btn04 , Btn05 , Btn06 , Btn07;
    // Btn = $('.musicBtn'),
    // Btn01 = $('.musicBtn1'),
    // Btn02 = $('.musicBtn2'),
    // Btn03 = $('.musicBtn3'),
    // Btn04 = $('.musicBtn4'),
    // Btn05 = $('.musicBtn5'),
    // Btn06 = $('.musicBtn6'),
    // Btn07 = $('.musicBtn7');
    $('.musicBtn').click(function(){
        // alert.(Btn);
        $('.popup').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn1').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(3)').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn2').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(4)').addClass('active');
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn3').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(5)').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn4').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(6)').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn5').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(7)').addClass('active');
        
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn6').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(8)').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });

    $('.musicBtn7').click(function(){
        // alert.(Btn);
        $('.popup:nth-of-type(9)').addClass('active');    
    });

    $('.popup span').click(function(){
        $('.popup').removeClass('active');
    });
});