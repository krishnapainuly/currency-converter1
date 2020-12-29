export function fetchData(state) {

    const BASE_URL = 'http://data.fixer.io/api/latest?access_key=5348a729ebda2cff1b4e82f52d4d0376';
    var request = require('request');

    var amount = state.amount;
    var amountCurrency = state.amountCurrency;
    var convertToCurrency = state.convertToCurrency;
    if (!amount && amount <= 0) {
        alert('Amount should be greater than zero.');
    }
    else if (!amountCurrency) {
        alert('Currency cannot be empty.');
    } else if (!convertToCurrency) {
        alert('Convert to currency cannot be empty.');
    }
    else {
        request({
            method: 'GET',
            // url: 'https://v6.exchangerate-api.com/v6/7ecfe761bceafc74387b295f/latest/USD',
            url: BASE_URL + '&base=' + amountCurrency + '&symbols=' + convertToCurrency,
            headers: {
                'Accept': 'application/json'
            }
        }, function (error, response, body) {
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
            // console.log('  ', response.json());
            // console.log(response);
        });
    }
}