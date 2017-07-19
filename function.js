$(window).scroll(function() {
    var wScroll = $(this).scrollTop(); //Tells us the position from the top. Check console
    console.log(wScroll);
    $('.logo').css({
        'transform': 'translate(0px, '+ wScroll /2 +'%)'
    });
    $('.back-bird').css({
        'transform': 'translate(0px, '+ wScroll /4 +'%)'
    });
    $('.fore-bird').css({
        'transform': 'translate(0px, -'+ wScroll /40 +'%)'
    });

    if(wScroll > $('.clothes-pics').offset().top - $(window).height()/2){

        $('.clothes-pics figure').each(function(i){

            setTimeout(function(){
                $('.clothes-pics figure').eq(i).addClass('is-showing');
            }, 150 * (i+1));

        });
    }

});
