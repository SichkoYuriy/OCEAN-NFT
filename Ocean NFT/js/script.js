$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
new Swiper('.image-slider', {
    breakpoints: {
        320: {
            spaceBetween: 15,
            slidesPerView: 1.8,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        425: {
            spaceBetween: 15,
            slidesPerView: 1.7,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        576: {
            spaceBetween: 15,
            slidesPerView: 2,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        768: {
            slidesPerView: 2.2 ,
        },
        1024: {
            slidesPerView: 3 ,
        },
        1300: {
            slidesPerView: 4 ,
        },
    },
}); 


new Swiper('.image-slider2', {
    slidesPerView: 3,
    spaceBetween: 15,
breakpoints: {
        320: {
            slidesPerView: 1,
    },
    400: {
            slidesPerView: 1.1,
        },
        425: {
            slidesPerView: 1.1,
        },
        576: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 1.7 ,
        },
        900: {
            slidesPerView: 1.9 ,
        },
        1024: {
            slidesPerView: 2.2 ,
        },
        1300: {
            slidesPerView: 2.7 ,
    },
        1400: {
            slidesPerView: 3 ,
        },
    },
    
}); 

new Swiper('.image-slider3', {
    slidesPerView: 3 ,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1.1,
        },
        425: {
            slidesPerView: 1.2,
        },
        519: {
            slidesPerView: 1.1,
        },
        576: {
            slidesPerView: 1.2,
        },
        650: {
            slidesPerView: 1.4,
        },
        768: {
            slidesPerView: 1.6 ,
        },
        900: {
            slidesPerView: 1.9 ,
        },
        1024: {
            slidesPerView: 2.2 ,
        },
        1300: {
            slidesPerView: 2.7 ,
    },
        1400: {
            slidesPerView: 3 ,
        },
    },
});

$('.mainblock5__header-link').click(function(){
        $('.content , .mainblock5__header-img').toggleClass('active');
    return false;
});