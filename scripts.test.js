const { getRequest } = require('./scripts');

const testUrl = 'http://ibt.rusfinance.ru/ICA/api/bank/news/1'
const expectedTitle = 'Русфинанс Банк рассказал на стриме о кредитных программах, учитывающих остаточную стоимость автомобиля'

test('Get request to ' + testUrl +' ... ', () => {
	getRequest(testUrl).then(json => {
		expect(json.title).toBe(expectedTitle);
	});
});