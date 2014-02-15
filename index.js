var B64XorCipher = {
  encode: function(key, data) {
    return new Buffer(xorStrings(key, data),'utf8').toString('base64');
  },
  decode: function(key, data) {
    data = new Buffer(data,'base64').toString('utf8');
    return xorStrings(key, data);
  }
};

function xorStrings(key,input){
  var output='';
  for(var i=0;i<input.length;i++){
    var c = input.charCodeAt(i);
    var k = key.charCodeAt(i%key.length);
    output += String.fromCharCode(c ^ k);
  }
  return output;
}

module.exports = B64XorCipher;