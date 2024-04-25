let aboutOffset = $('#about').offset().top
$(window).scroll(function () { 
    let scrolTop = $(window).scrollTop()
    if (scrolTop > aboutOffset - 300) {
        $('nav').addClass('nav-style');
    }else{
        $('nav').removeClass('nav-style');
        $('nav').addClass('bg-transparent');
    }
    console.log(aboutOffset);
    console.log(aboutOffset - 100);
});