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
			xmlHttp.open("GET");
		} catch (e) {
			alert(e.toString());
		}
	}
	
}