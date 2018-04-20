const request = require("request");
const OAuth = require("OAuth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

oauth.get(url + "Decathlon",
  process.env.TWITTER_ACCESS_TOKEN,
  process.env.TWITTER_ACCESS_SECRET,
  function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      //console.log(JSON.parse(data));
      JSON.parse(data).forEach(function (tweet) {
        let text = tweet.text;
        const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

        request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
          console.log(`\n ${text} \n`);
          console.log(`\n ${body} \n`);
        });
      });
    }
  });

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const urlWatson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
