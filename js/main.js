let aboutOffset = $('#about').offset().top
$(window).scroll(function () {
    let scrolTop = $(window).scrollTop()
    if (scrolTop > aboutOffset - 300) {
        $('nav').addClass('nav-style');
        $('nav').removeClass('navbar-dark');
        $('.toup').fadeIn(500)
        $('#openBtn').css('color','black')
    } else {
        $('nav').removeClass('nav-style');
        $('.toup').fadeOut(500)
        $('nav').addClass('navbar-dark');
        $('nav').addClass('bg-transparent');
        $('#openBtn').css('color','white')
    }
    console.log(aboutOffset);
    console.log(aboutOffset - 100);
});

$('.toup').click(() => {
    $(window).scrollTop(0)
});

$(document).ready(() => {
    $('#loading .sk-chase').fadeOut(500, () => {
        $('#loading').fadeOut(1000, () => {
            $('#loading').remove()
            $('body').css('overflow-y', 'auto')
        })
    })
})
$('#openBtn').click(() => {

    if ($('#edit').css('width') == "250px" && $('#openBtn').css('left') == '250px') {
        $('#edit').animate({
            width: '0px'
        })
        $('#openBtn').animate({
            left: '0px'
        })
        $('#textColor').css('display','none')
        $('#imgBg').css('display','none')
        
    } else if (($('#edit').css('width') == "0px" && $('#openBtn').css('left') == '0px')) {
        $('#edit').animate({
            width: '250px'
        })
        $('#openBtn').animate({
            left: '250px'
        })
        $('#textColor').css('display','flex')
        $('#imgBg').css('display','flex')
    }

})
$('#textColor .item').click( (e)=>{
    let x= $(e.target).css('backgroundColor')
    $('#mainText,h1,h2,h3,h4,p').css('color',x)
    console.log(x);
})
