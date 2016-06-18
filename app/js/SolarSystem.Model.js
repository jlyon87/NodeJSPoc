(function() {
	console.log('enter solarsystem.model class');
	var item = {
		href: ko.observable(),
		id: ko.observable(),
		id_str: ko.observable(),
		name: ko.observable()
	};

	var eveCrestResponse = {
		totalCount_str: ko.observable(),
		items: ko.observableArray(),
		pageCount: ko.observable(),
		pageCount_str: ko.observable(),
		totalCount: ko.observable()
	};

	ko.applyBindings(eveCrestResponse);

	model = SolarSystem.service.queryAllSystems(/*function(res, event) {
		if(!event.status) {
			// handle error
			console.log("error");
			return;
		}

		console.dir(res);
		model = res;
	}*/);

})();