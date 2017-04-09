(function () {
	var emailLink = document.getElementById("email");
	emailLink.addEventListener('click', noSpam, false);

	var social = document.querySelector('.links');
	social.addEventListener('click', gaEvent, false);

	function noSpam(evt) {
		console.log('noSpam');
		evt.preventDefault();
		var user = emailLink.dataset.localpart;
		var domain = emailLink.dataset.domain;
		var locationstring = "mailto:" + user + "@" + domain;
		window.location = locationstring;
	}

	function gaEvent (evt) {
		console.log('gaEvent');
		evt.preventDefault();
		var eventLabel = evt.target.id;
		ga('send', 'event', 'link', 'click', eventLabel);
	}
}());