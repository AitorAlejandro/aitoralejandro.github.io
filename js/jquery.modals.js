$(document).ready(function(){

$('.js-menu-open').click(function(){
    $(".nav-overlay").addClass("open");
    $("body").addClass("is-modal-open");
});

$('.js-menu-close').click(function(){
    $(".nav-overlay").removeClass("open");
    $("body").removeClass("is-modal-open");
});

});