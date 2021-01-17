$(document).ready(() => {

    let closeMenu = () => {

        
        $(".menu").removeClass("clicked");
        $(".links-container").css("transform", "translateX(100%)");
        $("nav").css("background-color", "transparent");
        $(".menu").attr("src", "images/icon-hamburger.svg")  

        if($(window).scrollTop() > 0){
            $("nav").css("background-color", "black");

        }else{
            $("nav").css("background-color", "transparent");
        }
    }


    $(".menu").click(() =>{
        if($(".menu").hasClass("clicked")){
            closeMenu();
        }else{
            $(".links-container").css("transform", "translateX(0%)");
            $(".menu").addClass("clicked");
            $("nav").css("background-color", "black");  
            $(".menu").attr("src", "images/icon-close.svg")
        }
    });

    $(".links").click(() => {
        if($(".menu").hasClass("clicked")){
            closeMenu();
        }
    })

    $(window).scroll(() => {
        $("nav").css("transition-duration", "0.8s");  

        
        if($(this).scrollTop() > 100){
            $("nav").css("background-color", "black");  
        }else{

            if($(".menu").hasClass("clicked")){
                $("nav").css("background-color", "black");  

            }else{
                $("nav").css("background-color", "transparent");

            }

        }
    })




    


})