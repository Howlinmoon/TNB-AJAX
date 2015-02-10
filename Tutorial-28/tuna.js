var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

// called on load
function process() {
	if (xmlHttp) {
		try {
			xmlHttp.open("GET", "tuna.xml", true);
			xmlHttp.onreadystatechange = handleStateChange;
			xmlHttp.send(null);
		} catch (e) {
			alert(e.toString());
		}
	}
}

