var xor = require('./../index.js');
var key='This is the key';
var data='Here is some data to be encoded and decoded.';

var encoded=xor.encode(key,data);
var decoded=xor.decode(key,encoded);
console.log('Encoding...');
console.log('...key: '+key);
console.log('...data: '+data);
console.log('...encoded: '+encoded);
console.log('Decoding...');
console.log('...key: '+key);
console.log('...data: '+encoded);
console.log('...decoded: '+decoded);
console.log(decoded==data ? 'Passed!' : 'Failed!');