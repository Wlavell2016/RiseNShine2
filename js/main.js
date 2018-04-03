$('#com_1').on("click", function(event){
    console.log('fired')
    $('#com_2').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_3').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    $('#com_1_image').fadeIn(2000)
    $('#com_1_image').css('display', 'flex')
    $('#com_2_image').css('display', 'none')
    $('#com_3_image').css('display', 'none')
    $('#com_4_image').css('display', 'none')
    $('#com_5_image').css('display', 'none')
    $('#com_6_image').css('display', 'none')
});

$('#com_2').on("click", function(event){
    $('#com_2').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_3').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    // $('#com_2_image').fadeIn(2000)
    $('#com_2_image').fadeIn(2000)
    $('#com_2_image').css('display', 'flex')
    $('#com_1_image').css('display', 'none')
    $('#com_3_image').css('display', 'none')
    $('#com_4_image').css('display', 'none')
    $('#com_5_image').css('display', 'none')
    $('#com_6_image').css('display', 'none')
})


$('#com_3').on("click", function(event){
    console.log('fired')

    $('#com_3').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_2').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    // $('#com_2_image').fadeIn(2000)
    $('#com_3_image').fadeIn(2000)
    $('#com_3_image').css('display', 'flex')
    $('#com_1_image').css('display', 'none')
    $('#com_2_image').css('display', 'none')
    $('#com_4_image').css('display', 'none')
    $('#com_5_image').css('display', 'none')
    $('#com_6_image').css('display', 'none')
})

$('#com_4').on("click", function(event){
    console.log('fired')

    $('#com_4').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_2').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    // $('#com_2_image').fadeIn(2000)
    $('#com_4_image').fadeIn(2000)
    $('#com_4_image').css('display', 'flex')
    $('#com_1_image').css('display', 'none')
    $('#com_3_image').css('display', 'none')
    $('#com_2_image').css('display', 'none')
    $('#com_5_image').css('display', 'none')
    $('#com_6_image').css('display', 'none')
})

$('#com_5').on("click", function(event){
    $('#com_5').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_3').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    // $('#com_2_image').fadeIn(2000)
    $('#com_5_image').fadeIn(2000)
    $('#com_5_image').css('display', 'flex')
    $('#com_1_image').css('display', 'none')
    $('#com_3_image').css('display', 'none')
    $('#com_4_image').css('display', 'none')
    $('#com_2_image').css('display', 'none')
    $('#com_6_image').css('display', 'none')
})

$('#com_6').on("click", function(event){
    $('#com_6').addClass('commercial_button_active')
    $('#com_1').removeClass('commercial_button_active')
    $('#com_3').removeClass('commercial_button_active')
    $('#com_4').removeClass('commercial_button_active')
    $('#com_5').removeClass('commercial_button_active')
    $('#com_6').removeClass('commercial_button_active')
    // $('#com_2_image').fadeIn(2000)
    $('#com_6_image').fadeIn(2000)
    $('#com_6_image').css('display', 'flex')
    $('#com_2_image').css('display', 'none')
    $('#com_3_image').css('display', 'none')
    $('#com_4_image').css('display', 'none')
    $('#com_5_image').css('display', 'none')
    $('#com_1_image').css('display', 'none')
})







// for updating nav bar color
var viewportHeight = $(window).height();
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > viewportHeight) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/logo.png').css('width', '61px').css('height', '71px')
                $('a.nav-link').css('color', '#9C9C9C')

            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/logo.png').css('width', '61px').css('height', '71px')
            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/logo.png').css('width', '51px').css('height', '61px')
            } else {
                console.log('ok')
            }
        } else {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '111px').css('height', '121px')
                $('a.nav-link').css('color', '#FFFF')

            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '111px').css('height', '121px')

            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '71px').css('height', '81px')

            } else {
                console.log('ok')
            }
        }
    })
})

// color: #9C9C9C;
