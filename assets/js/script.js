$(document).ready(function() {

	$('#bigmapicon').click(function(){window.open('map.html');});
	$('#bigthesicon').click(function(){window.open('thesaurus.html');});
	$('#mapicon').click(function(){window.open('map.html');});
	$('#boxicon').click(function(){window.open('index.html');});
	$('#thesicon').click(function(){window.open('thesaurus.html');});

	$('.icon').hover(function(){$('.icon').css( 'cursor', 'pointer' );});
	$('#reset-button').hover(function(){$('#reset-button').css( 'cursor', 'pointer' );});
	$('.element').hover(function(){
		$('.element').css( 'cursor', 'pointer');4
		//add class here
	});
	
	$('#helper-text').hover(function(){
		$('#start').fadeIn(200);
	});

	$('#mapper-container').click(function(){
		if($('#helper-text').css('display') != 'none'){
			$('#helper-text').fadeOut(400, function(){
			$('#mapper').fadeIn(300);
		});
		}
	})


});