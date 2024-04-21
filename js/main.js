let aboutOffset = $('#about').offset().top
$(window).scroll(function () { 
    let scrolTop = $(window).scrollTop()
    if (scrolTop > aboutOffset) {
        $('nav').css('backgroundColor','#ffffff !important')
    }else{
        $('nav').css('backgroundColor','transparent !important')
        console.log('hello');
    }
});