// Strike through & color change for checked items
// Event Listeners for the button clicks
// Add items to the list from user input (sort ABC)
$(document).ready(function() {

	// -enter items & add to list
	$('.input').on('click', 'button', function(event) {
		event.preventDefault();
		var newItem = $('#userInput').val();
		console.log(newItem);
		// append method on newitem with if statement
		// if textbox is empty, adds nothing
		// else adds to ul
		// alphabetic sort

	// check/uncheck items
		// mousedown function on item text
			// strikethrough text
			// font color change to grey

	// remove items
		// $('.items') method to delete from ul

	// item count
		// checked items/total items
	})
});