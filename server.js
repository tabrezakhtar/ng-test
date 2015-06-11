var express  = require('express');
var app = express();
var playList = [];

app.get('/api/songs', function (req, res) {
	var songsList = {
		"songs": [
	    {
	      "title": "Smells Like Teen Spirit",
	      "artist": "Nirvana",
	      "genre": "Grunge",
	      "duration": 5.01,
	      "rate": 3
	    },
	    {
	      "title": "Thunderstruck",
	      "artist": "AC/DC",
	      "genre": "Rock",
	      "duration": 4.52,
	      "rate": 4
	    },
	    {
	      "title": "Sweet Child O' Mine",
	      "artist": "Guns N' Roses",
	      "genre": "Hard Rock",
	      "duration": 5.56,
	      "rate": 4
	    },
	    {
	      "title": "Livin' On A Prayer",
	      "artist": "Bon Jovi",
	      "genre": "Rock",
	      "duration": 4.09,
	      "rate": 3.5
	    },
	    {
	      "title": "Open Fire",
	      "artist": "The Darkness",
	      "genre": "Pop",
	      "duration": 4.01,
	      "rate": 2
	    },
	    {
	      "title": "Handsome",
	      "artist": "The Vaccines",
	      "genre": "Indie",
	      "duration": 2.20,
	      "rate": 2
	    },
	    {
	      "title": "Stairway To Heaven",
	      "artist": "Led Zeppelin",
	      "genre": "Classic Rock",
	      "duration": 7.58,
	      "rate": 4.5
	    },
	    {
	      "title": "Go",
	      "artist": "The Chemical Brothers",
	      "genre": "Electronic",
	      "duration": 3.20,
	      "rate": 1
	    },
	    {
	      "title": "Titanium",
	      "artist": "David Guetta",
	      "genre": "Dance",
	      "duration": 2.50,
	      "rate": 1
	    },
	    {
	      "title": "Kernkraft 400",
	      "artist": "Zombie Nation",
	      "genre": "Techno",
	      "duration": 3.33,
	      "rate": 2.5
	    }
	  ]
	};

    res.json(songsList);
});

app.get('/api/playlist', function (req, res) {	
    res.json(playList);
});

app.use(express.static(__dirname + '/public'));

app.use('*', function(req, res){
  res.sendFile(__dirname + '/public/music-player.html');
});
	
app.listen(8080);
console.log("App listening on port 8080");