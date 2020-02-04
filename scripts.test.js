const { getRequest } = require('./scripts');

const testUrl = 'http://ibt.rusfinance.ru/ICA/api/bank/news/1'
//const testUrl = 'https://my-json-server.typicode.com/typicode/demo/posts'

const expectedTitle = 'Русфинанс Банк рассказал на стриме о кредитных программах, учитывающих остаточную стоимость автомобиля'
//const expectedTitle = 'Post 1'

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl);
//	expect(data[0].title).toBe(expectedTitle);
	expect(data.title).toBe(expectedTitle);
});
