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

isBrowser ? getRequest('https://jsonplaceholder.typicode.com/posts/1') : exports.getRequest = getRequest;