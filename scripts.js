const isBrowser = typeof window !== "undefined" && window.fetch
const fetch = isBrowser ? window.fetch : require("cross-fetch");

function getRequest(url) {
	return fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json);
			return json;
		})
		.catch(err => {
	    console.log('error:' + err)
  });
};

function postRequest(url) {
	return fetch(url, {
	    method: 'POST' 
	  })
	  .then(response => response.json())
	  .then(json => {
			console.log(json);
			return json;
		})
		.catch(err => {
	    console.log('error:' + err)
  });
};

function putRequest(url) {
	return fetch(url, {
	    method: 'PUT' 
	  })
	  .then(response => response.json())
	  .then(json => {
			console.log(json);
			return json;
		})
		.catch(err => {
	    console.log('error:' + err)
  });
};

function deleteRequest(url) {
	return fetch(url, {
	    method: 'DELETE' 
	  })
	  .then(response => response.json())
	  .then(json => {
			console.log(json);
			return json;
		})
		.catch(err => {
	    console.log('error:' + err)
  });
};

if(!isBrowser) {
	exports.getRequest = getRequest;
	exports.postRequest = postRequest;
	exports.putRequest = putRequest;
	exports.deleteRequest = deleteRequest;
}
