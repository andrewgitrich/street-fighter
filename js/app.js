$(document).ready(function() {

  $('.ryu').mouseenter(function() {
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  	})/* no semicolon due to chaining of mouseleave*/ 
.mouseleave(function(){
	$(".ryu-still").show();
	$(".ryu-ready").hide();
	})

.mousedown(function(){
	playHadouken();
	$(".ryu-ready").hide();
	$(".ryu-throwing").show();
	$(".hadouken").finish().show().animate(
		{"left":"1020px"},400,
		function(){
			$(this).hide();
			$(this).css("left","520px");
		});
	})
.mouseup(function(){
	$(".ryu-throwing").hide();
	$(".ryu-ready").show();
	});

$(document).keydown(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-still').hide();
            $(".ryu-ready").hide();
            $('.ryu-cool').show();
        }  
    })
    	.keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });
// cant go back to standing still w/o adding a ryu
$(function(){
		$("#first-p").fadeIn(3000);
		$("#second-p").fadeIn(7000);
		});





});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}









