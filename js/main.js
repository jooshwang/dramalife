$(document).ready(function(){
    // subArea click
    subClick();
    // mainSlider
    mainSlider();
    ostSlider();


    $(document).scroll(function(){
        // console.log("나는 스크롤 탑이야 = " + $(document).scrollTop());
        // console.log("그럼 나는 뭐지? = "+$('.introArea div').offset().top);
        var a = $(document).scrollTop() + $(window).height()/2;
        // console.log("aa = " +$(document).scrollTop());
        // console.log("bb = " + $(window).height()/2);
        console.log($(document).scrollTop());
        console.log($('.introArea h2').offset().top);
        
        
        
        if(a >= $('.introArea h2').offset().top){
            $('.introArea div:first-of-type').addClass('animate');
        }else{
            $('.introArea div:first-of-type').removeClass('animate');
        }

        if(a >= $('.introArea div:first-of-type').offset().top){
            $('.introArea div:nth-of-type(2)').addClass('animate');
        }else{
            $('.introArea div:nth-of-type(2)').removeClass('animate');
        }

        if(a >= $('.introArea div:nth-of-type(2)').offset().top){
            $('.introArea div:nth-of-type(3)').addClass('animate');
        }else{
            $('.introArea div:nth-of-type(3)').removeClass('animate');
        }

        if(a >= $('.introArea div:nth-of-type(3)').offset().top){
            $('.introArea div:nth-of-type(4)').addClass('animate');
        }else{
            $('.introArea div:nth-of-type(4)').removeClass('animate');
        }

        if(a >= $('.introArea div:nth-of-type(4)').offset().top){
            $('.introArea div:nth-of-type(5)').addClass('animate');
        }else{
            $('.introArea div:nth-of-type(5)').removeClass('animate');
        }

        if(a >= $('.introArea div:nth-of-type(5)').offset().top){
            $('.introArea div:nth-of-type(6)').addClass('animate');
        }else{
            $('.introArea div:nth-of-type(6)').removeClass('animate');
        }
    });

    




//scrollTop
//offset().top


function subClick(){
    $('.subArea li').click(function(){
        $('.subArea li').removeClass('active');
        $(this).addClass('active');
        console.log($(this).attr('rel'));
        $('.mainArea li').removeClass('active');
        $('#' + $(this).attr('rel')).addClass('active');
    });
}

function mainSlider(){
    var swiper = new Swiper('.main', {
        // slidesPerView: 1,
        // spaceBetween: 0,
        // loop: true,
        // slidesPerGroup: 1,     
      pagination: {
        el: '.swiper-pagination02',
        clickable: true,
    },
    });
}

function ostSlider(){
    var swiper = new Swiper('.album', {
        slidesPerView: 3, 
        spaceBetween: 30, 
        slidesPerGroup: 1,
        loop: true, 
        loopFillGroupWithBlank: true, 
        pagination: { 
           el: '.swiper-pagination01', 
          clickable: true,
        },  
        breakpoints: {
    // when window width is >= 320px
    // 320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //     },
    // when window width is >= 480px
    // 480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //     },
    // when window width is >= 640px
        1240: {
            slidesPerView: 3,
            spaceBetween: 30
            },    

        869: {
            slidesPerView: 3,
            spaceBetween: 30
            },
        640: {
            slidesPerView: 2,
            spaceBetween: 30

            },    

        320: {
            slidesPerView: 1,
            spaceBetween: 30

            },     
        }, 
         
         

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}

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