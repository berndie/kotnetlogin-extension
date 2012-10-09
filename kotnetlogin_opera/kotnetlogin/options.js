var username;
var password;
var institute;
var saveButton;
var resetButton;

//Load settings from localStorage and fill them in in the form
function init() {
	username = document.getElementById("username");
	password = document.getElementById("password");
	institute = document.getElementById("institute");
	saveButton = document.getElementById("save-button");
	resetButton = document.getElementById("reset-button");

	username.value  = widget.preferences.username || "";
	password.value  = widget.preferences.password || "";
	institute.value = widget.preferences.institute || "kuleuven";
	markClean();
}

//Save settings in localStorage
function save() {
	var wasNull = (widget.preferences.active == null);
	widget.preferences.username = username.value;
	widget.preferences.password = password.value;
	widget.preferences.institute = institute.value;
	if (wasNull) widget.preferences.active = true;
	document.getElementById('success').style.display = 'block';
	markClean();
}

function cancel() {
	window.close();
}

function markDirty() {
	saveButton.disabled = false;
}

function markClean() {
	saveButton.disabled = true;
}

//Add event listeners once the DOM has fully loaded by listening for the
//`DOMContentLoaded` event on the document, and adding your listeners to
//specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
	init();

	username.addEventListener('input', markDirty);
	password.addEventListener('input', markDirty);
	institute.addEventListener('change', markDirty);
	saveButton.addEventListener('click', save);
	resetButton.addEventListener('click', cancel);
});
