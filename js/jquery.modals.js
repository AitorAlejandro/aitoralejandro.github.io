$(document).ready(function(){

$('.js-menu-open').click(function(){
    $(".nav-overlay").addClass("open");
});

$('.js-menu-close').click(function(){
    $(".nav-overlay").removeClass("open");
});

});