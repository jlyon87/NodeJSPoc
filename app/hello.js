$(document).ready(function() {
	$.ajax({
		url: "//rest-service.guides.spring.io/greeting/"
	}).then(function(data) {
		$(".greeting-id").append(data.id);
		$(".greeting-content").append(data.content);
	});
});