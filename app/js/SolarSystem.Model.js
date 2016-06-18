(function() {
	var model = {
		var totalCount_str: ko.observable(),
		var items: {
			href: ko.observable(),
			id: ko.observable(),
			id_str: ko.observable(),
			name: ko.observable()
		},
		var pageCount: ko.observable(),
		var pageCount_str: ko.observable(),
		var totalCount: ko.observable()
	};

	ko.applyBindings(model);

	SolarSystem.service.queryAllSystems(function(res, event) {
		if(!event.status) {
			// handle error
			return;
		}

		model = res;
	});
});