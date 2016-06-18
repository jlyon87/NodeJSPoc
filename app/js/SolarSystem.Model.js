(function() {
	var SolarSystem = {
		href: ko.observable(),
		id: ko.observable(),
		id_str: ko.observable(),
		name: ko.observable()
	};

	var eveCrestResponse = {
		var totalCount_str: ko.observable(),
		var SolarSystems: ko.observableArray(),
		var pageCount: ko.observable(),
		var pageCount_str: ko.observable(),
		var totalCount: ko.observable()
	};

	SolarSystem.service.queryAllSystems(function(res, event) {
		if(!event.status) {
			// handle error
			return;
		}

		model = res;
	});

	ko.applyBindings(eveCrestResponse);
});