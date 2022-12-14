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


$('.mainblock8__column2-header').click(function(){
        $('.mainblock8__column2-items , .mainblock8__column2-line ,.m8__arrow').toggleClass('active');
    return false;
});

$('.mainblock8__column3-header').click(function(){
        $('.mainblock8__column3-items , .mainblock8__column3-line ,.m8__arrow').toggleClass('active');
    return false;
});

$('.mainblock8__column4-header').click(function(){
        $('.mainblock8__column4-items , .mainblock8__column4-line ,.m8__arrow').toggleClass('active');
    return false;
});

$('.mainblock8__column5-header').click(function(){
        $('.mainblock8__column5-items , .mainblock8__column5-line ,.m8__arrow').toggleClass('active');
    return false;
});

$('.mainblock8__column6-header').click(function(){
        $('.mainblock8__column6-items ,.m8__arrow').toggleClass('active');
    return false;
});

$(document).ready(function () {
    var scroll_pos = 0;
    $(window).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {
            $(".header").css('background-color', 'rgba(32, 8, 59, 0.9)');
        } else {
            $(".header").css('background-color', 'rgba(51, 51, 51,0)');

        }
    });
});
// var btnContainer = document.getElementsByClassName("mainblock3__section1-columns");
// var btns = btnContainer.getElementsByClassName("mainblock3__button");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// };

function changeImage(fileName) {
    let img = document.querySelector("#block3Image");
    img.setAttribute("src", fileName);
};

(function(){

	'use strict';
  var wrapper = document.querySelector('.mainblock3__section1-columns');

  wrapper.addEventListener('click', function(e) {
    var button = document.querySelectorAll('button');
    var target = e.target;
    if(!target.classList.contains('mainblock3__section1-columns')) {
    	  [].forEach.call(button, function(elem){ 
     		 elem.classList.remove('active');
   		  });
   		   target.classList.add('active');
    }
	})
})();

