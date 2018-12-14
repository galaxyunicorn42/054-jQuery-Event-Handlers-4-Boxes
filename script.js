$(".top-left").click(function(){
    $(".top-left").text("thank you for clicking me");
     $(".top-left").css("background","green");
});
$(".top-right").dblclick(function(){
    $(".top-right").text("thank you for clicking me");
     $(".top-right").css("background","blue");
});
$(".bottom-left").hover(function(){
    $(".bottom-left").text("thank you for hovering me");
     $(".bottom-left").css("background","yellow");
});
$(".bottom-right").mouseenter(function(){
    $(".bottom-right").text("thank you for visiting");
     $(".bottom-right").css("background","white");
});
$(".bottom-right").mouseleave(function(){
    $(".bottom-right").text("come again soon");
     $(".bottom-right").css("background","red");
});