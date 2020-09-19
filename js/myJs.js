$(document).ready(function(){
    $slide = true;
    $(".btnNavSlide").click(function(){
        navSlide();
    });

    $(window).resize(function(){
        if($(this).width() > 575 && $slide == false){
            navSlide($(this).width());
        }
    });

    $(".panels").accordion(
        {active: 2}, 
        {collapsible: true},
        {heightStyle: "content"}
    );
});

function navSlide($winWidth) {
    $(".navSlider").slideToggle();
    if($slide){
        $(".body").css("transform", "translateY(-130px)");
        $(".body").css("transition", "transform ease 500ms");
        $slide = false;
    }
    else {
        $(".body").css("transform", "translateY(0px)");
        $slide = true;
    }
}