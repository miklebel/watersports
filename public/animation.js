

$(document).ready(function () {
    $('.animate1').waypoint(function () {
        console.log('animate1');
        $('.animate1').addClass('animated').addClass('fadeIn').show();
    }, { offset: '80%' });
    $('.animate2').waypoint((event) => {
        console.log('animate2');
        $('.animate2').addClass('animated').addClass('fadeInLeft').show();
    }, { offset: '80%' });
    const animate = (className, animationName) => {
        $(className).waypoint((event) => {
            console.log(`Animating class: ${className}`);
            $(className).addClass('animated').addClass(animationName).show().css('opacity', '1');
        }, { offset: '80%' });
    }
    animate('.topicTitle', 'fadeInLeft');
    animate('.topicSmallTitle', 'fadeInUp');
    animate('.animate3', 'fadeIn');
    animate('.animate4', 'fadeIn');
    animate('.animate5', 'fadeIn');
    animate('.animate6', 'fadeIn');
    animate('.animate7', 'fadeIn');
    animate('.animate8', 'fadeIn');
    animate('.animate9', 'fadeIn');
    animate('.animate10', 'fadeIn');
    animate('.animate11', 'fadeIn');
    animate('.animate12', 'fadeIn');
    animate('.animate13', 'fadeIn');
    animate('.animate14', 'fadeIn');
    animate('.animate15', 'fadeIn');
    animate('.animate16', 'fadeIn');
    animate('.animate17', 'fadeIn');
    animate('.animate18', 'fadeIn');
    animate('.animate19', 'fadeIn');



    // $('.hamburger').on('click', (event) => {

    //     if ($('.navLinks').css('display') == 'none') {
    //         $('.navLinks').removeClass('animated fadeOut').css('display', 'flex').css('opacity', '1').addClass('animated fadeIn');
    //         $(event.currentTarget).addClass('is-active');
    //     } else if ($('.navLinks').css('display') == 'flex') {
    //         $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
    //             $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');
    //         });
    //         $(event.currentTarget).removeClass('is-active');
    //     }
    // });


    // $('.navLinks').on('click', (event) => {
    //     if (($(window).width() <= 1280) && ($('.navLinks').css('display') == 'flex')) {
    //         $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
    //             $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');
    //         });
    //         $('.hamburger').removeClass('is-active');
    //     }
    // })



    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
        $('.hamburger').on('click', (event) => {

            if ($('.navLinks').css('display') == 'none') {
                $('.navLinks').removeClass('animated fadeOut').css('display', 'flex').css('opacity', '1').addClass('animated fadeIn');

                $('header').css('width', '100vw').css('height', '100vh');
                $('.hamburger').css('display', 'none');
                $('.topButton').css('display', 'none');
                $(event.currentTarget).addClass('is-active');
            } else if ($('.navLinks').css('display') == 'flex') {
                $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');

                });

                $(event.currentTarget).removeClass('is-active');
            }
        });


        $('.navLinks').on('click', (event) => {
            if (($(window).width() <= 1280) && ($('.navLinks').css('display') == 'flex')) {
                $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');

                });
                $('.hamburger').removeClass('is-active');
                $('.hamburger').css('display', 'block');
                $('.topButton').css('display', 'block');
                $('header').css('width', '100%').css('height', '50px');
            }
        })
    } else {
        $('.hamburger').on('click', (event) => {

            if ($('.navLinks').css('display') == 'none') {
                $('.navLinks').removeClass('animated fadeOut').css('display', 'flex').css('opacity', '1').addClass('animated fadeIn');
                $(event.currentTarget).addClass('is-active');
            } else if ($('.navLinks').css('display') == 'flex') {
                $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');
                });
                $(event.currentTarget).removeClass('is-active');
            }
        });


        $('.navLinks').on('click', (event) => {
            if (($(window).width() <= 1280) && ($('.navLinks').css('display') == 'flex')) {
                $('.navLinks').removeClass('animated fadeIn').addClass('animated fadeOut').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                    $('.fadeOut').css('display', 'none').removeClass('animated fadeOut');
                });
                $('.hamburger').removeClass('is-active');
            }
        })
    }



    $(window).resize(function () {
        if ($(window).width() <= 1280) {
            $('.navLinks').css('display', 'none');
            $('.hamburger').removeClass('is-active');
        } else {
            $('.navLinks').css('display', 'flex').addClass('animated fadeIn');
        }
    });

    const scrollTo = (button, place) => {
        $(button).click(function () {
            $('html,body').animate({
                scrollTop: $(place).offset().top
            },
                'slow');
        })
    }

    scrollTo('.jetSkiButton', '.jetSki');
    scrollTo('.kayakButton', '.kayak');
    scrollTo('.pedaloButton', '.pedalo');
    scrollTo('.supButton', '.sup');
    scrollTo('.flyboardButton', '.flyboard');
    scrollTo('.bookButton', '.book');
    scrollTo('.topButton', '.top');






});

$(window).load(function() {
    $('.preloader').fadeOut('slow');
 });

