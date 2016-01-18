var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});
$(document).ready(function () {

	for(var i = 0; i < 16; i++) {
		$row.append($square.clone());
	}
	for(var i = 0; i < 16; i++) {
		$('#wrapper').append($row.clone());
	}

	$('.square').css
	$('.square').hover(
	function() {
		$(this).css( "background", "black");
	});

});
