$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 750, 'swing', function () {
        window.location.hash = target;
    });
});


$('.nav-link').click(function(event){
    console.log('fired')
    $('.nav-link').removeClass('active')
    $(this).toggleClass('active')
});


$('#com_1').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_1_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_1_image .commercial_text_row').css('transform', 'scale(1,1)')
});

$('#com_2').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_2_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_2_image .commercial_text_row').css('transform', 'scale(1,1)')
});

$('#com_3').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_3_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_3_image .commercial_text_row').css('transform', 'scale(1,1)')
});

$('#com_4').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_4_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_4_image .commercial_text_row').css('transform', 'scale(1,1)')
});

$('#com_5').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_5_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_5_image .commercial_text_row').css('transform', 'scale(1,1)')
});

$('#com_6').hover(function(event){
    console.log('fired')
    $('.commercial_button').removeClass('commercial_button_active')
    $(this).toggleClass('commercial_button_active')
    $('.com_image').css('opacity', '0.01')
    $('#com_6_image').css('opacity', '0.9')
    $('com_image .commercial_text_row').css('transform', 'scale(0,0)')
    $('#com_6_image .commercial_text_row').css('transform', 'scale(1,1)')
});


// residential buttons


// $('#res_1').hover(function(event){
//     console.log('fired')
//     $('.res_1').css('background-image', 'url("images/residential/leaves.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });
//
$('#res_1').hover(function(event){
    console.log('fired')
    $('.res_1').css('opacity', '1');
    $('.res_2').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

$('#res_2').hover(function(event){
    console.log('fired')
    $('.res_2').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_3').hover(function(event){
    console.log('fired')
    $('.res_3').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_4').hover(function(event){
    console.log('fired')
    $('.res_4').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_5').hover(function(event){
    console.log('fired')
    $('.res_5').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_6').hover(function(event){
    console.log('fired')
    $('.res_6').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_7').hover(function(event){
    console.log('fired')
    $('.res_7').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_8').hover(function(event){
    console.log('fired')
    $('.res_8').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_9').hover(function(event){
    console.log('fired')
    $('.res_9').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_10').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});

$('#res_10').hover(function(event){
    console.log('fired')
    $('.res_10').css('opacity', '1');
    $('.res_1').css('opacity', '0');
    $('.res_3').css('opacity', '0');
    $('.res_4').css('opacity', '0');
    $('.res_5').css('opacity', '0');
    $('.res_6').css('opacity', '0');
    $('.res_7').css('opacity', '0');
    $('.res_8').css('opacity', '0');
    $('.res_9').css('opacity', '0');
    $('.res_2').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
});


//
// $('#res_10').hover(function(event){
//     console.log('fired')
//     $('.res_1').css('background-image', 'url("images/residential/mopping.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });


// Moving

$('#mov_1').hover(function(event){
    console.log('fired')
    $('.mov_1').css('opacity', '1');
    $('.mov_2').css('opacity', '0');
    $('.mov_3').css('opacity', '0');
    $('.mov_4').css('opacity', '0');
    $('.mov_5').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

$('#mov_2').hover(function(event){
    console.log('fired')
    $('.mov_2').css('opacity', '1');
    $('.mov_1').css('opacity', '0');
    $('.mov_3').css('opacity', '0');
    $('.mov_4').css('opacity', '0');
    $('.mov_5').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

$('#mov_3').hover(function(event){
    console.log('fired')
    $('.mov_3').css('opacity', '1');
    $('.mov_1').css('opacity', '0');
    $('.mov_2').css('opacity', '0');
    $('.mov_4').css('opacity', '0');
    $('.mov_5').css('opacity', '0');
    $('#mov_3 .p_grey_small').css('color', 'white');

    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

$('#mov_4').hover(function(event){
    console.log('fired')
    $('.mov_4').css('opacity', '1');
    $('.mov_1').css('opacity', '0');
    $('.mov_3').css('opacity', '0');
    $('.mov_2').css('opacity', '0');
    $('.mov_5').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

$('#mov_5').hover(function(event){
    console.log('fired')
    $('.mov_5').css('opacity', '1');
    $('.mov_1').css('opacity', '0');
    $('.mov_3').css('opacity', '0');
    $('.mov_4').css('opacity', '0');
    $('.mov_2').css('opacity', '0');
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    // $(this).toggleClass('mov_image')
});

// $('#mov_2').hover(function(event){
//     console.log('fired')
//     $('.mov_2').css('background-image', 'url("images/moving/broom.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });

// $('#mov_3').hover(function(event){
//     console.log('fired')
//     $('.mov_3').css('background-image', 'url("images/moving/vacuuming.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });
//
// $('#mov_4').hover(function(event){
//     console.log('fired')
//     $('.mov_4').css('background-image', 'url("images/moving/walls.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });
//
// $('#mov_5').hover(function(event){
//     console.log('fired')
//     $('.mov_5').css('background-image', 'url("images/moving/dusting.jpeg")');
//     $('.res_button').removeClass('residential_button_active')
//     $(this).toggleClass('residential_button_active')
// });


// for updating nav bar color
var viewportHeight = $(window).height();
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > viewportHeight) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '61px').css('height', '71px').css('padding-top', '1vh')
                $('a.nav-link').css('color', '#9C9C9C')

            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '61px').css('height', '71px').css('padding-top', '2vh')
            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '51px').css('height', '61px').css('padding-top', '2vh')
            } else {
                console.log('ok')
            }
        } else {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '111px').css('height', '110px').css('padding-top', '2vh')
                $('a.nav-link').css('color', '#FFFF')

            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '111px').css('height', '110px').css('padding-top', '2vh')

            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo.png').css('width', '71px').css('height', '81px').css('padding-top', '2vh')

            } else {
                console.log('ok')
            }
        }
    })
})

// color: #9C9C9C;
