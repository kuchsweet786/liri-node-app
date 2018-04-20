




var request = require('request');

var spotify = require('spotify');

var tweets = require('twitter');

var liriArgs = process.argv.slice(2);

var liriCommand = liriArgs[0];

var liriData = liriArgs[1];



    function liri(liriCommand, liriData) {
            switch (liriCommand) {
        case "my-tweets":
            myTweets();
            break;
        case "spotify-this-song":
            if (liriArgs.length === 1) {
                var song = "ride it";
            } else if (liriArgs.length === 2) {
                var song = liriData;
            } else {
                var song = '';
                for (var i = 1; i < liriArgs.length; i++) {
                    song = song + ' ' + liriArgs[i];
                }
            }

    }
}

function myTweets() {

}



function spotifyThisSong(song) {

    spotify.search({ type: 'track', query: song }, function(error, response) {

        if (error) {
            console.log('Artist Name: ' + response.tracks.items[0].artists[0].name);
            console.log('Song Name: ' + response.tracks.items[0].name);
            console.log('Preview URL: ' + response.tracks.items[0].preview_url);
            console.log('Album Name: ' + response.tracks.items[0].album.name);
        } else {
            console.log('Error occurred: ' + error);
        }
    });
}


function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data){
        if (!error) {
            doWhatItSaysResults = data.split(",");
            spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
        } else {
            console.log("Error occurred" + error);
        }
    });
};

liri(liriCommand, liriData);