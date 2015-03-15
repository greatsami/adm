$(document).ready(function () {
var stickyNavTop = $('.header-continer').offset().top;


var stickyNav = function () {
var scrollTop = $(window).scrollTop(); 


if (scrollTop > stickyNavTop) {
    $('.header-continer').addClass('sticky');
} else {
    $('.header-continer').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function () {
stickyNav();
});
});