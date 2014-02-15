var xor = require('./../index.js');
var expected='123';
var key='abc';
var data='UFBQ';

var decoded=xor.decode(key,data);
console.log('Decoding... key: '+key+' data: '+data+' output: '+decoded+' expected: '+expected);
console.log(decoded==expected ? 'Passed!' : 'Failed!');