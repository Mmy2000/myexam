let aboutOffset = $('#about').offset().top
$(window).scroll(function () { 
    let scrolTop = $(window).scrollTop()
    if (scrolTop > aboutOffset) {
        $('nav').addClass('nav-style');
    }else{
        $('nav').addClass('bg-transparent');
        console.log('hello');
    }
});