var querySystem = function() {
	$.getJSON({
		dataType: "json",
		url: "https://crest-tq.eveonline.com/solarsystems/30000001/",
		data: data,
		success: success
	}).then(function(data) {
		$(".greeting-id").append(data.id);
		$(".greeting-content").append(data.content);
	});
};