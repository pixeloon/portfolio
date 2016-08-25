
$(document).ready(function(){

  $(".page1").mouseenter(function(){
    $(".page1").css("background-image", "url('images/appletes_text.png')");
    $("page1-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page1").css("background-image", "url('images/appletes_thumb.png')");
  })

    $(".page2").mouseenter(function(){
    $(".page2").css("background-image", "url('images/vision_text.png')");
    $("page2-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page2").css("background-image", "url('images/vision_thumb.png')");
  })

    $(".page3").mouseenter(function(){
    $(".page3").css("background-image", "url('images/rebel_text.png')");
    $("page3-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page3").css("background-image", "url('images/rebel_thumb.png')");
  })


});
