const { getRequest } = require('./scripts');

const testUrl = 'http://localhost:3000/api'

const expectedMethod = 'GET'

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl);
	expect(data.method).toBe(expectedMethod);
});