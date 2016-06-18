var SolarSystem = (function(SolarSystem) {

	SolarSystem.Service = {
		queryAllSystems: queryAllSystems
	};

	return SolarSystem;

	function queryAllSystems() {
		$.getJSON( "https://crest-tq.eveonline.com/solarsystems/", function(data) {
			/*var items = [];
			$.each( data, function( key, val ) {
				items.push( "<li id='" + key + "'>" + val + "</li>" );
				console.log(key);
				console.log(val);
			});

			$("<ul/>", {
				"class": "my-new-list",
				html: items.join( "" )
			}).appendTo( "body" );	*/
			return data;
		});
	}

})(SolarSystem || {});