(function () {
	var emailLink = document.querySelector('.email');
	emailLink.addEventListener('click', noSpam, false);
	
	function noSpam(evt) {
		evt.preventDefault();
		var user = emailLink.dataset.localpart;
		var domain = emailLink.dataset.domain;
		var locationstring = "mailto:" + user + "@" + domain;
		window.location = locationstring;
	}
}());