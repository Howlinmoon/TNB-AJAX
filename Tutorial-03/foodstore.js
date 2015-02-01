var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;

	// MS IE Workaround
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			xmlHttp = false;
		}
	} else {
		// for the rest of the world
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			xmlHttp = false;
		}
	}

	if (!xmlHttp) {
		// something went wrong
		alert("Can't create that object hoss!");
	}

	return xmlHttp;
}

function process() {
	console.log("process() xmlHttp.readyState = "+xmlHttp.readyState);
	if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
		// the object is not busy and is able to communicate with the server
		// then we grab the food
		var food = encodeURIComponent(document.getElementById("userInput").value);
		// create our request - assume foodstore.php is at
		// www.bifftech.com/AJAXTest1/foodstore.php
		xmlHttp.open("GET",
				"http://www.bifftech.com/TNB-AJAX/Tutorial-03/foodstore.php?food=" + food,
				true);
		xmlHttp.onreadystatechange = handleServerResponse;
		// parameter is non-null for POST, but is null for GET
		xmlHttp.send(null);
	} else {
		setTimeout('process()', 1000);
	}
}

function handleServerResponse() {
	// state #4, response is ready
	console.log("handleServerResponse()  readyState = "+xmlHttp.readyState);
	if (xmlHttp.readyState == 4) {
		// check the HTTP status
		if (xmlHttp.status == 200) {
			// 200 is good
			var xmlResponse = xmlHttp.responseXML;
			var xmlDocumentElement = xmlResponse.documentElement;
			var message = xmlDocumentElement.firstChild.data;
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
			// this sends an xml request every second
			setTimeout('process()', 1000);
		} else {
			console.log("xmlHttp.status = "+xmlHttp.status);
		}
	}
}