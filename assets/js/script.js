$(document).ready(function() {
	$('#test1').click(function(){
		window.open('map.html');
	});
	$('#test2').click(function(){
		window.open('thesaurus.html');
	});
	$('#test').click(function(){
		window.open('index.html');
	});

	$('#bigmapicon').click(function(){window.open('map.html');});
	$('#bigthesicon').click(function(){window.open('thesaurus.html');});
	$('#mapicon').click(function(){window.open('map.html');});
	$('#boxicon').click(function(){window.open('index.html');});
	$('#thesicon').click(function(){window.open('thesaurus.html');});

	$('.icon').hover(function(){
		$('.icon').css( 'cursor', 'pointer' );
	});


});