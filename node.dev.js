"use strict";

var axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
  return console.log(res);
});