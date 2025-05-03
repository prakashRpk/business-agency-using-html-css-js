$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled',$(this).scrollTop()>$nav.height());
    });
});

var manu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

manu.onclick = function(){
    if(items.style.right == "-360px"){
        items.style.right = "0";
    }
    else{
        items.style.right = "-360px"
    }
};