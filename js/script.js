$(document).ready(function() {
	
	// -enter items & add to list

	// If event is click || Enter keycode 
	// $('.input').on('click', keycode == 13, button)

		// Do this code

	$('.input').on('click', 'button', function(event) {
		event.preventDefault();
		var newItem = $('#inputBox').val();
		if (newItem === "") {
			console.log("No input");
		} else {
			$('.items ul').append('<li>' + newItem + '<button><i class="fa fa-trash-o" aria-hidden="true"></i></button>' + '</li>');
			$('#inputBox').val(null);
		}
	})

	.keydown(function(event){
		if (event.keyCode === 13) {
			event.preventDefault();
			var newItem = $('#inputBox').val();
			if (newItem === "") {
				console.log("No input");
			} else {
				$('.items ul').append('<li>' + newItem + '<button><i class="fa fa-trash-o" aria-hidden="true"></i></button>' + '</li>');
				$('#inputBox').val(null);
			}	
		}
	});


	// check/uncheck items
	$('.items ul').on('click', 'li', function(event) {
		event.preventDefault();
		$(this).css({
			"color": "lightslategray",
			"text-decoration": "line-through"
		});
	})

	//remove items
	$('.items ul').on('click', 'button', function(event) {
		event.preventDefault();
		$(this).closest('li').remove();
	})

	// item count
		// checked items/total items
	
});

// Alphabetic sorting
// Footer with total items
// Style the buttons - change remove to icons