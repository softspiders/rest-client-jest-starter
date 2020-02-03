
//Test url for get, put, delete requests in browser: 'https://jsonplaceholder.typicode.com/posts/1'
//Test url for post requests in browser: 'https://jsonplaceholder.typicode.com/posts'
//Test url for get requests in Node.js: 'http://ibt.rusfinance.ru/ICA/api/bank/news/1'

require('es6-promise').polyfill();
require('isomorphic-fetch');

function getRequest(url) {
	return fetch(url)
		.then(response => response.json())
		.then(json =>{ 
			console.log(json);
			return json;
		})
		.catch(err => {
	    console.log('error:')
	    console.log(err)
  });
};

getRequest('http://ibt.rusfinance.ru/ICA/api/bank/news/1');

exports.getRequest = getRequest;