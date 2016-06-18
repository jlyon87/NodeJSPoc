var SolarSystem = (function(SolarSystem) {
	console.log('enter solarsystem.service class');
	SolarSystem.Service = {
		queryAllSystems: queryAllSystems
	};

	return SolarSystem;

	function queryAllSystems(callback) {
		console.log('enter queryAllSystems');
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
			console.log('Query All Systems Complete.');
			console.dir(data);
//			return data;
		});
	}

})(SolarSystem || {});