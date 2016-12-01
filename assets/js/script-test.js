$(document).ready(function() {

	//initializes audio elements for each div
	var u = document.getElementById('up-audio');
	var l = document.getElementById('left-audio');
	var r = document.getElementById('right-audio');
	var d = document.getElementById('down-audio');

	//hover effect plays audio elements
	$('.up').hover(function(){u.animate({volume: 1.0},1);u.play();}, 
		(function(){u.animate({volume: 0.0},1);}));

	$('.left').hover(function(){l.play();},
		(function(){l.pause();}));

	$('.right').hover(function(){r.play();}, 
		(function(){r.pause();}));

	$('.down').hover(function(){d.play();}, 
		(function(){d.pause();}));

	//audio is changed when selected
	$('.up').click(function(){
		u.pause();
		u = document.getElementById('up-up-audio');
	});	

	//all changes reset; audio elements reinitialized
	$('.button').click(function(){
		u = document.getElementById('up-audio');
	});

});