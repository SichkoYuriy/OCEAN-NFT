$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
new Swiper('.image-slider', {
}); 
