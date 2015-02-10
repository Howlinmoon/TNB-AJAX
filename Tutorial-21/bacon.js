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

function handleServerResponse() {
	var theD = document.getElementById('theD');
	if (xmlHttp.readyState == 1) {
		// established a connection (this will not display with Chrome)
		theD.innerHTML += "Status 1: server connection established <br/>";
	} else if (xmlHttp.readyState == 2) {
		theD.innerHTML += "Status 2: server received the request <br/>";
	} else if (xmlHttp.readyState == 3) {
		theD.innerHTML += "Status 3: server is processing the request <br/>";
	} else if (xmlHttp.readyState == 4) {
		// response is ready...
		if (xmlHttp.status == 200) {
			try {
				var text = xmlHttp.responseText;
				theD.innerHTML += "Status 4: request is finished and response is ready <br/>";
				theD.innerHTML += "Text Received: <b>"+text+"</b> <br/>";
			} catch (e) {
				alert (e.toString() );
			}
		} else {
			// something went wrong - display it
			alert( xmlHttp.statusText );
		}
		
		
		
	}
	
}