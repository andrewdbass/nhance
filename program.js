var Twit = require('twit')
var async = require("async")

var T = new Twit({
  consumer_key:         '79NL1fCiKRMgrMWZ5R7raHEY4',
  consumer_secret:      'nXruFA8pobVxhnKec1OyxYdNGZWfK9YLpQZRjPkCERWxwIA0VD',
  access_token:         '2350498783-7gjG7m4wwM7swhryymXCMyGpt9k1iw6uLYIGXm1',
  access_token_secret:  'qc8EsHqAVb1VJfKT542GK4z45LtZPsWPSPY5OD8bY0UOn'
})

//test that T is working
/*T.post('statuses/update', { status: "Always be Testing"}, function(err, data, response){
	console.log(data)
})*/
console.log("Enter a users screen name w/o @ to start following their users:")
process.stdin.on('data', function(text){
 
	//DO NOT RUN THIS WILL GET YOU BANNED!	
	T.get("followers/ids",{screen_name: text.toString().replace(/(\r\n|\n|\r)/gm,""), stringify_ids: true}, function(err, data, res){
		var followers = data.ids
		var time = 1000

		async.each(followers,function(follower){
			setTimeout(function(){
				T.post('friendships/create', {user_id: follower}, function(err, data, response) {
					console.log("hi")
					console.log(data)
				})
			},time)
			time = time + 1000*10
		}, function() {
			console.log(done)
		})
	})
})
