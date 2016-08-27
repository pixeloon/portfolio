
$(document).ready(function(){

  $(".page1").mouseenter(function(){
    $(".page1").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/appletes_text.png')");
    $("page1-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page1").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/appletes_thumb.png')");
  })

    $(".page2").mouseenter(function(){
    $(".page2").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/vision_text.png')");
    $("page2-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page2").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/vision_thumb.png')");
  })

    $(".page3").mouseenter(function(){
    $(".page3").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/rebel_text.png')");
    $("page3-desc").css("visibility", "visible")
  }).mouseleave(function(){
    $(".page3").css("background-image", "url('https://s3.amazonaws.com/pixeloon/portfolio/rebel_thumb.png')");
  })


});
