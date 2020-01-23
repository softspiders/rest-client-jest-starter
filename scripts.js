
//Test url for get, put and delete requests : 'https://jsonplaceholder.typicode.com/posts/1'
//Test url for post requests : 'https://jsonplaceholder.typicode.com/posts'


function getRequest(url) {
	fetch(url)
	  .then(response => response.json())
	  .then(json => console.log(json))
	}

function postRequest(url, title, body) {
	fetch(url, {
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
	  .then(json => console.log(json))
}

function putRequest(url, id, title, body) {
	fetch(url, {
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
	  .then(json => console.log(json))
}

function deleteRequest(url) {
	fetch(url, {
	  method: 'DELETE'
	})
	.then(console.log('Delete request completed!'))
}
