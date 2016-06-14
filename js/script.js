$(document).ready(function() {

	numberOfItems();
	
	// -enter items & add to list
	$('.input').on('click', 'button', function(event) {
		event.preventDefault();
		var newItem = $('#inputBox').val();
		if (newItem === "") {
			console.log("No input");
		} else {
			addItems();
			numberOfItems();
		}
		
	})

	.keydown(function(event){
		if (event.keyCode === 13) {
			event.preventDefault();
			var newItem = $('#inputBox').val();
			if (newItem === "") {
				console.log("No input");
			} else {
				addItems();
				numberOfItems();
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

	// remove items
	$('.items ul').on('click', 'button', function(event) {
		event.preventDefault();
		$(this).closest('li').remove();
		numberOfItems();
	})
	
});

function addItems() {
	var newItem = $('#inputBox').val();
	$('.items ul').append('<li>' + newItem + '<button><i class="fa fa-trash-o" aria-hidden="true"></i></button>' + '</li>');
	$('#inputBox').val(null);
}

function numberOfItems() {
	var itemCount = $("li").length;
	$('footer').text(itemCount + " " + "item(s)");
}

// Style the enter button
// gh-pages