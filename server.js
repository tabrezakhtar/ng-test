var express  = require('express');
var app = express();

// app.get('/api/hello', function (req, res) {
//     res.send('hello');
// });

app.use(express.static(__dirname + '/public'));

app.use('*', function(req, res){
  res.sendFile(__dirname + '/public/music-player.html');
});
	
app.listen(8080);
console.log("App listening on port 8080");