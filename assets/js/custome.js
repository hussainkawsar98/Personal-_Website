// Fixed Navbar
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".navbar").addClass("nav-fixed");
    } else {
        $(".navbar").removeClass("nav-fixed");
    }
});

// Typing JS
var typed = new Typed('.banner-text span', {
    strings: ['Front-end Dveloper', 'CMS Developer', 'Freelancer'],
    smartBackspace: true,
    typeSpeed: 100,
    loop: true,
    backDelay: 700,
    showCursor: false,
    backSpeed: 50

  });


// Counter JS
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});


// Owl Carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:6000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });

// Wow JS
new WOW().init();