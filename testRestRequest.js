var http = require('http');
var restClient = require('restler');

var options = {
    host: '10.0.80.59',
    port: 10080,
    path: 'skydropadmin/REST/v1.0/private/transferConfig/validate?apiKey=5981274a-de8e-4ea5-a072-5cd101a59901&accessToken=something',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaWduaWFudF9mbGlnaHRfc2VydmVyX2F3cyIsInN1YiI6InNpZ25pYW50X2ZsaWdodF9zZXJ2ZXJfYXdzIiwiYXVkIjoic2lnbmlhbnRfZmxpZ2h0X2NvbnNvbGUiLCJpYXQiOjE0NDk0OTgyMDgsImV4cCI6MTQ0OTQ5ODUwOCwiYWRkaXRpb25hbENsYWltcyI6Ilt7XCJuYW1lXCJcXDpcInRyeTFcIn0se1wibmFtZVwiXFw6XCJ0cnkyXCJ9XSJ9.FSSqr2AzMLrjrCNZk3Rd0MzviyrCYhHo1BZnkeTBjDgdBd6_NjlggTbjElZUvJ6Q7Vg6yU4kZIdlO4Kmn2e_uIr3eAWBz_nR-acToQGPquQg0CDcEH-p6LMisfN_BJFJMuKjtY53Wkt5wgLpMDU5m4YMWSg7mDsEsJIBjamhbiPXyZbfBLFCeO9iyHqZre3MR6Ctcf0Z8y9D51lIzDgePct0rjocI93-1-fd5UwX6jua9OmaTUFAZs5EX_W6_EW59hYnBhTtKV1EGhch5IL0277Wj2ci0_l295NPTmHaefMUuaVkka9pJMIBiptv6oaSvVMIvUP9uvgOYg3p233S7K_XGLVoAwTabv_3YXd47sucShWQHfl6jQA7dDqkn-hqinBFoKHFypxCTxoqZ3AisbbyPYFIol-DQG4rEn59lPHb55J962MSxs2s-GZHDyo-Y0GWZ-HNkqWHAEMKK1u2mtJMW93-IYLigcQa55tHDXFg-qRVySp7gu7zpmVIF9v2bXsy36VREzk0JBb_rT0vHWCl8ILyacgKRzLhKt3XMkUUk-CKb1J4sm4027PfYM4EthJygeBlx9GOmOkEIQicJxhWqQ7Ctzu0hra5U8Io7l6WsKlhsjNp22Q7ay0GPG6JEuEhN975Qp47KxEhw6GhYO8oGxHCtOPVMA6snsa38go'
    },
    method: 'POST',

};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
})

req.write(JSON.stringify({
    'key': 'value from node'
}));

req.on('error', function(e) {
    console.error(e);
});

restClient
    .get(, args)
    .on('complete', function (data, response) {

        var foundItem = _.findWhere(data.fileList, {name: 'test1.txt'});
        assert(foundItem.name === 'test1.txt');

        foundItem = _.findWhere(data.fileList, {name: 'test2.txt'});
        assert(foundItem.name === 'test2.txt');

        console.log('\nNumber of files in AWS bucket \'' + awsBucket + '\': '
            + data.fileList.length);

        assert(response.statusCode === 200);
        console.log('\nBasic bucket listing - response status code (GET): ' + response.statusCode);

        done();
    });


req.end();
