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

const url = 'http://ibt.rusfinance.ru/ICA/api/bank/news/1';
//const url = 'https://my-json-server.typicode.com/typicode/demo/posts';

isBrowser ? getRequest(url) : exports.getRequest = getRequest;