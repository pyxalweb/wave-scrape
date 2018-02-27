// visit http://wave.webaim.org/report#/www.DOMAIN.com in your browser
// Copy/Paste the code below into the Developer Tools Console
// The Errors/Alerts should display at the top-right corner

jQuery(document).ready(function($){
	var listItem = '';

	$("#output").remove();
	$("body").prepend("<div id='output'></div>");

	function group(listType){
		$("#output").append("<div id='"+ listType +"'><h2>" + listType + "s</h2></div>");
		$("ul#group_list_" + listType).find('li.icon_type').each(function() {
			listItem = $(this).text();
			$('#' + listType).append("<p>" + listItem + "</p>");
		});
	};

	group("error");
	group("alert");

	$('#output').css({
		"background": "#000",
		"color": "#fff",
		"font-family": "Arial, sans-serif",
		"padding": "0 20px 20px 20px",
		"position": "absolute",
		"right": "0",
		"z-index": "99999"
	});

	$('#output h2').css({
		"margin": "20px 0 10px 0",
		"text-transform": "capitalize"
	});
});
