$(document).ready(function(){

$('.js-menu-open').click(function(){
    $("body").addClass("is-modal-open");
    $(".nav-overlay").addClass("open");
});

$('.js-menu-close').click(function(){
    $(".nav-overlay").removeClass("open");
    $("body").removeClass("is-modal-open");
});

});