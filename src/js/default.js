(function () {
	var emailLink = document.getElementById("email");
	emailLink.addEventListener('click', noSpam, false);

	var social = document.querySelector('.links');
	social.addEventListener('click', analyticsEvent, false);

	function noSpam(evt) {
		evt.preventDefault();
		var user = emailLink.dataset.localpart;
		var domain = emailLink.dataset.domain;
		var locationstring = "mailto:" + user + "@" + domain;
		window.location = locationstring;
	}

	function analyticsEvent (evt) {
		var eventLabel = evt.target.id;
		window.goatcounter.count({
			path:  'link-click',
			title: eventLabel,
			event: true,
		});
	}
}());