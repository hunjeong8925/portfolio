$(document).ready(function(){
  hi = $(".full1").height();

  li = $(".quick li").each

  $('#link1').click(function(e){
        e.preventDefault();
        $("#fullpage").animate({
            top: 0,
          }, 600);
          });	
  $('#link2').click(function(e){
          e.preventDefault();
          $("#fullpage").animate({
            //top: $('#target2').offset().top,
            "top": -hi*1 +"px",
          }, 600);
        });		
  $('#link3').click(function(e){
          e.preventDefault();
          $("#fullpage").animate({
            //top: $('#target2').offset().top,
            "top": -hi*2 +"px",
          }, 600);
        });	
          $('#link4').click(function(e){
          e.preventDefault();
          $("#fullpage").animate({
            //top: $('#target2').offset().top,
            "top": -hi*3 +"px",
          }, 600);
        });	
  $('#link5').click(function(e){
          e.preventDefault();
          $("#fullpage").animate({
            //top: $('#target2').offset().top,
            "top": -hi*4 +"px",
          }, 600);
        });
      });
  
