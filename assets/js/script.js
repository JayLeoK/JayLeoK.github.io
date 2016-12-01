$(document).ready(function() {

	$('#bigmapicon').click(function(){window.open('map.html');});
	$('#bigthesicon').click(function(){window.open('thesaurus.html');});
	$('#mapicon').click(function(){window.open('map.html');});
	$('#boxicon').click(function(){window.open('index.html');});
	$('#thesicon').click(function(){window.open('thesaurus.html');});

	$('.icon').hover(function(){$('.icon').css( 'cursor', 'pointer' );});
	$('#reset-button').hover(function(){$('#reset-button').css( 'cursor', 'pointer' );});
	
	$('#helper-text').hover(function(){
		$('#start').fadeIn(200);
	});

	$('#mapper-container').click(function(){
		if($('#helper-text').css('display') != 'none'){
			$('#helper-text').fadeOut(400, function(){
			$('#mapper').fadeIn(300);
		});
		}
	});

	var u = document.getElementById('up-audio');
	var l = document.getElementById('left-audio');
	var r = document.getElementById('right-audio');
	var d = document.getElementById('down-audio');
	var filter = "";

	$('#up').hover(function(){u.play();
		$('#up').addClass('select');},
		(function(){u.pause();
			$('#up').removeClass('select');}));
	$('#left').hover(function(){l.play();
		$('#left').addClass('select');},
		(function(){l.pause();
			$('#left').removeClass('select');}));
	$('#right').hover(function(){r.play();
		$('#right').addClass('select');}, 
		(function(){r.pause();
			$('#right').removeClass('select');}));
	$('#down').hover(function(){d.play();
		$('#down').addClass('select');}, 
		(function(){d.pause();
			$('#down').removeClass('select');}));

	$('#up').click(function(){
		u.pause();
		if(filter){
			alert("You've chosen " + filter +" roots and Mechanical style. It's LIT!");	
			reset();
		}else{
			$('#elements').css('background-color','rgba(134, 45, 134, 0.5)');
			filter = "Mechanical";
			u = document.getElementById('up-up-audio');
			r = document.getElementById('up-right-audio');
			l = document.getElementById('up-left-audio');
			d = document.getElementById('up-down-audio');
		}
	});
	$('#left').click(function(){
		l.pause();
		if(filter){
			alert("You've chosen " + filter +" roots and Atmospheric/Dense style. Cool vibes...");	
			reset();
		}else{
			$('#elements').css('background-color','rgba(0, 57, 230, 0.5)');
			filter = "Atmospheric/Dense";
			u = document.getElementById('left-up-audio');
			r = document.getElementById('left-right-audio');
			l = document.getElementById('left-left-audio');
			d = document.getElementById('left-down-audio');
		}
	});
	$('#right').click(function(){
		r.pause();
		if(filter){
			alert("You've chosen " + filter +" roots and Bouncy/Spiky style. Get up and dance!");	
			reset();
		}else{
			$('#elements').css('background-color','rgba(204, 0, 0, 0.5)');
			filter = "Bouncy/Spiky";
			u = document.getElementById('right-up-audio');
			r = document.getElementById('right-right-audio');
			l = document.getElementById('right-left-audio');
			d = document.getElementById('right-down-audio');
		}
	});
	$('#down').click(function(){
		d.pause();
		if(filter){
			alert("You've chosen " + filter +" roots and Organic style. Classic stuff!");	
			reset();
		}else{
			$('#elements').css('background-color','rgba(0, 102, 0, 0.5)');
			filter = "Organic";
			u = document.getElementById('down-up-audio');
			r = document.getElementById('down-right-audio');
			l = document.getElementById('down-left-audio');
			d = document.getElementById('down-down-audio');
		}
	});
	
	var reset = function(){
		u = document.getElementById('up-audio');
		l = document.getElementById('left-audio');
		r = document.getElementById('right-audio');
		d = document.getElementById('down-audio');
		$('#elements').css('background-color','white');
		filter = "";
	};
	$('#reset-button').click(function(){
		reset();
	})

});