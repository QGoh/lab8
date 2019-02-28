// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function() {
		$("div.box").bind("taphold", tapHoldHandler);
		function tapHoldHandler(event) {
			$(event.target).addClass("taphold");
		}
	});
	
	$(function() {
		$(".judge-img").bind("taphold", tapHoldHandler);
		function tapHoldHandler(event) {
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e) {
	  e.preventDefault();
	  console.log("Submitting form...");
	  var rsvpEmail = $('#rsvpEmail').val();
	  $.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);
  });
  
  function postCallback(response) {
	  alert("RSVP form successfully submitted!");
	  $('#rsvpEmail').val('');
  }
}





















