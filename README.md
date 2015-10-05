# co-nexmo
co wrapper for nexmo

## Example

```js
var Nexmo = require('co-nexmo');

var nexmo = Nexmo({
  key: 'key',
  secret: 'secret'
});

...
var balance = yield nexmo.getBalance();
```

Supported API
=======================================

###Get Balance

	getBalance()
	
###Search Message

	searchMessages(date, mobileNumber)

###Send Text Message

	sendTextMessage(fromNumber, toMobileNumber, text)

###Send Text Short Code

	sendTextShortCode(mobileNumber, pin)
	

# License

  MIT
