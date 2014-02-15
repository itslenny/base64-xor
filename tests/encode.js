var xor = require('./../index.js');
var data='123';
var key='abc';
var expected='UFBQ';

var encoded=xor.encode(key,data);
console.log('Encoding... key: '+key+' data: '+data+' output: '+encoded+' expected: '+expected);
console.log(encoded==expected ? 'Passed!' : 'Failed!');