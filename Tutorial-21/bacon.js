var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	// create and return the http request object
	var xmlHttp;
	
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	return xmlHttp;
}

function process() {
	
	if (xmlHttp) {
		try {
			xmlHttp.open("GET", "bacon.txt", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			// connects to the server
			xmlHttp.send(null);
		} catch (e) {
			alert(e.toString());
		}
	}
	
}