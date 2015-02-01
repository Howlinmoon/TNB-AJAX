var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;
	
	// MS IE Workaround
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			xmlHttp = false;
		}
	} else {
		// for the rest of the world
		try {
			xmlHttp = new XMLHttpRequest();
		} catch(e) {
			xmlHttp = false;
		}
	}

	if (! xmlHttp ) {
		// something went wrong
		alert("Can't create that object hoss!");
	}
	
	return xmlHttp;
}

function process() {
	
	if (xmlHttp.readyState== 0 || xmlHttp.readyState == 4) {
		// the object is not busy and is able to communicate with the server
		// then we grab the food
		var food = encodeURIComponent(document.getElementById("userInput").value);
		// create our request
		xmlHttp.open("GET", "foodstore.php");
		
	} else {
		
	}
	
	
}