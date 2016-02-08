var Twit = require('twit')

var T = new Twit({
  consumer_key:         '79NL1fCiKRMgrMWZ5R7raHEY4',
  consumer_secret:      'nXruFA8pobVxhnKec1OyxYdNGZWfK9YLpQZRjPkCERWxwIA0VD',
  access_token:         '2350498783-7gjG7m4wwM7swhryymXCMyGpt9k1iw6uLYIGXm1',
  access_token_secret:  'qc8EsHqAVb1VJfKT542GK4z45LtZPsWPSPY5OD8bY0UOn',
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