var querySystem = function() {
	$.getJSON( "https://crest-tq.eveonline.com/solarsystems/30000001/", function(data) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});
		
		$("<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "body" );	
});