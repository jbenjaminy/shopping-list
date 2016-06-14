$(document).ready(function() {
	
	// -enter items & add to list
	$('.input').on('click', 'button', function(event) {
		event.preventDefault();
		var newItem = $('#inputBox').val();

		$('.items ul').append('<li>' + newItem + " " + "<button>remove</button>" + '</li>');
		// alphabetic sort
		// $('#inputBox')[0].reset();

	// check/uncheck items
	$('.items ul').on('click', 'li', function(event) {
		event.preventDefault();
		$(this).css("color", "lightgray")
			.css("text-decoration", "line-through"); 
			// try putting in one css method
	})

	//remove items
	$('.items ul').on('click', 'button', function(event) {
		event.preventDefault();
		$(this).closest('li').remove();
	})

	// item count
		// checked items/total items
	})
});