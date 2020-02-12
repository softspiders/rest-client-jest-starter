
const { getRequest, postRequest, putRequest, deleteRequest } = require('./scripts');

const testUrl1 = 'http://localhost:3000/api';
const testUrl2 = 'http://localhost:3000/api/1';


const getMethod = 'GET';
const postMethod = 'POST';
const putMethod = 'PUT';
const deleteMethod = 'DELETE';

test('Get request to ' + testUrl1 +' ... ', async () => {
	const data = await getRequest(testUrl1);
	expect(data.method).toBe(getMethod);
});

test('Post request to ' + testUrl1 +' ... ', async () => {
	const data = await postRequest(testUrl1);
	expect(data.method).toBe(postMethod);
});

test('Put request to ' + testUrl2 +' ... ', async () => {
	const data = await putRequest(testUrl2);
	expect(data.method).toBe(putMethod);
});

test('Delete request to ' + testUrl2 +' ... ', async () => {
	const data = await deleteRequest(testUrl2);
	expect(data.method).toBe(deleteMethod);
});