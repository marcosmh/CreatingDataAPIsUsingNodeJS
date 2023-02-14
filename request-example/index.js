const request = require('request');

request('https://jsonplaceholder.typicode.com/todos/1', (err,res,body) => {
    if(err) { console.log(err); }
    console.log(body);

});