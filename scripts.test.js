
const { getRequest } = require('./scripts');

const testUrl = 'http://localhost:3000/api'
//const testUrl = 'https://my-json-server.typicode.com/typicode/demo/posts'

const expectedMethod = 'GET'
//const expectedTitle = 'Post 1'

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl);
//	expect(data[0].method).toBe(expectedMethod);
	expect(data.method).toBe(expectedMethod);
});