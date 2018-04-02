var dbot = require('./index');
var hasil = dbot.get_response("hallo", function(err, result){
    (err) ? console.log(err) : console.log(result)
})