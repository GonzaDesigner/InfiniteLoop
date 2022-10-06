let btnMenu = document.querySelector("#menuBtn");
let menu = document.querySelector(".cont-li");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
});


$(document).ready(function() {
    $(".btnIcon").click(function (){
        $(".nav-bar").toggleClass("dark-nav-bar");
        $(".link-hd").toggleClass("dark-link-hd");
        $("footer").toggleClass("footer-dark");
        $("body").toggleClass("bodyDark");
        $(".quienesSomos").toggleClass("dark-quienesSomos");
        $("p").toggleClass("dark-p");
        $(".title-v").toggleClass("dark-title-v");
        $(".title-nameProd").toggleClass("title-nameProd-dark");
        $(".contenedorProd").toggleClass("contenedorProd-dark");
        $(".contLink").toggleClass("contLink-dark");
        $(".follow").toggleClass("follow-dark");
        $(".go-top-buttom").toggleClass("go-top-buttom-dark");
        $("label").toggleClass("label-dark");
        $(".line").toggleClass("line-dark");
        $(".imgIcon-navbar").toggleClass("imgIcon-navbar-dark");
    });
});


let id = $(this).attr("box-id");
let mostrar = document.querySelector('#boxId' + id);

