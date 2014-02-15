base64-xor
==========

Simple Node.js module that creates a base64 encoded xor cipher from a pair of strings. Includes 2 methods encode / decode. For use when speed is important and security is not.

## Usage

```javascript

//include module
var xor = require('base64-xor');

//encode takes two paramaters: key (utf8), data (utf8)
xor.encode('abc','123');
//output: UFBQ

//decode takes two parameters: key (utf8), data (base64)
xor.decode('abc','UFBQ');
//output: 123

```