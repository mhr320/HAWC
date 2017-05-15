$(document).ready(function() {

	$("#barb").click(function() {

		$(this).fadeOut(2000); /* Intent: click barbell and fade out then fade in Username/Password form */
		$("form").fadeIn(3000);
	});

	$(".form-style-10 h1").click(function() { /*if this h1 is clicked, instead of the image, the form will also appear*/

		$("#barb").fadeOut(2000);
		$("form").fadeIn(3000);
	});

});