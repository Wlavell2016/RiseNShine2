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

// residential buttons
$('#res_1').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_1').fadeIn(2000)
    $('.res_1').css('display', 'block')
})


$('#res_2').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_2').fadeIn(2000)
    $('.res_2').css('display', 'block')
})

$('#res_3').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_3').fadeIn(2000)
    $('.res_3').css('display', 'block')
})

$('#res_4').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_4').fadeIn(2000)
    $('.res_4').css('display', 'block')
})

$('#res_5').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_5').fadeIn(2000)
    $('.res_5').css('display', 'block')
})

$('#res_6').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_6').fadeIn(2000)
    $('.res_6').css('display', 'block')
})

$('#res_7').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_7').fadeIn(2000)
    $('.res_7').css('display', 'block')
})

$('#res_8').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_8').fadeIn(2000)
    $('.res_8').css('display', 'block')
})

$('#res_9').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_9').fadeIn(2000)
    $('.res_9').css('display', 'block')
})

$('#res_10').on("click", function(event){
    console.log('fired')
    $('.res_button').removeClass('residential_button_active')
    $(this).toggleClass('residential_button_active')
    $('.res_image').css('display', 'none')
    $('.res_10').fadeIn(2000)
    $('.res_10').css('display', 'block')
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
