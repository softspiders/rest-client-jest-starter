
//Test url for get, put, delete requests in browser: 'https://jsonplaceholder.typicode.com/posts/1'
//Test url for post requests in browser: 'https://jsonplaceholder.typicode.com/posts'
//Test url for get requests in Node.js: 'http://ibt.rusfinance.ru/ICA/api/bank/news/1'

require('es6-promise').polyfill();
require('isomorphic-fetch');

function getRequest(url) {
	return fetch(url)
		.then(response => response.json())
		.then(json =>{ 
			console.log("title: " + json.title);
			return json;
		})
		.catch(err => {
	    console.log('error:')
	    console.log(err)
  });
};

function postRequest(url, title, body) {
	return fetch(url, {
		  method: 'POST',
		  body: JSON.stringify({
      	title: title,
      	body: body,
      	userId: 1
		  }),
		  headers: {
		    "Content-type": "application/json; charset=UTF-8"
		  }
		})
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

function putRequest(url, id, title, body) {
	return fetch(url, {
	    method: 'PUT',
	    body: JSON.stringify({
	    	id: id,
	      title: title,
      	body: body,
      	userId: 1
	    }),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
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

function deleteRequest(url) {
	return fetch(url, {
	  method: 'DELETE'
	})
	.then(console.log('Delete request completed!'))
	.catch(err => {
	    console.log('error:')
	    console.log(err)
  });
}

getRequest('http://ibt.rusfinance.ru/ICA/api/bank/news/1');

exports.getRequest = getRequest;