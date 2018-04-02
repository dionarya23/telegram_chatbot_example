# dbot-js
🤖 dbot-js is an Indonesian-language bot

## INSTALL
```npm install dbot-js --save```

## Usage
Example

```javascript
var dbot = require('dbot-js')

dbot.get_response("apakabar?", function(err, result) {
    (!err) ?
    console.log(result)
    // result => "Kabar ku baik, kamu?"
})
```