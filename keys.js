console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'aCXtH0UiBPVpkXDkXQMeFrMxP',
  consumer_secret: 'OZMAAQJadhTTF3aKWclh2ICld3JJahR37oQItrsSuHjSC6WS7j',
  access_token_key: '911070260064698369-9cixgd4A307VP2Dp4kXgfkvIOaveV3Y',
  access_token_secret: 'U1MucdHA3hzvOSiTBg4Dwni58EfiL2d4jeuoZxp67lK3o',
}

module.exports = twitterKeys;


var spotify = new Spotify({
  id: <8d76350e22e94bad95498659ada7a3f6>,
  secret: <c8fd4d7c3fb24ca7bfb12ac015fed20b>
});
 
spotify.search({ type: 'track', query: 'CREAM' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


module.exports = spotify;