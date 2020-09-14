$(document).ready(function(){

    new WOW().init();

    //navbar 

    $('.burger-nav').on('click',function(){
        $('.nav li').toggleClass('open');
    });


    $(function() {
        var numbericon = $(".title-icon-big");
        var spincrementvar = 0;
        var hieghtThreshold = $(".caption").offset().top;
        var hieghtThreshold_end  = $(".caption").offset().top +$(".caption").height();

        
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 60) {
                $(".navbar-group").addClass("nav-scroll");
                } else {
                $(".navbar-group").removeClass("nav-scroll");
                }

           
            if (scroll >= hieghtThreshold && spincrementvar == 0) {
                numbericon.addClass('spincrement');

                spincrementvar = 1;
                $('.spincrement').spincrement({
                    thousandSeparator:'',
                    from   : 0,
                    to : 1000,
                    duration: 2400,
                    easing:'spincrementEasing',
                    fade:true
                    });
            } 
        });


    })





});


