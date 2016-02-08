var Twit = require('twit')

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,   
})

//test that T is working
/*T.post('statuses/update', { status: "Always be Testing"}, function(err, data, response){
	console.log(data)
})*/

console.log("Enter a users screen name w/o @ to start following their users:")
process.stdin.on('data', function(text){

//DO NOT RUN THIS WILL GET YOU BANNED!	
T.get("followers/ids",{screen_name:"andrewdbass", stringify_ids: true}, function(err, data, response){
	var followers = data.ids
	followers.forEach(function(follower) {

		T.post('friendships/create', {user_id: follower}, function(data, err, response) {
			console.log(data)
		})
	})
})

/*T.post('friendships/create', {user_id: ""}, function(data, err, response) {
	console.log(data)
})*/