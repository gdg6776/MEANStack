var mongoose = require('mongoose');
mongoose.set('debug', true);

var commentSchema = new mongoose.Schema({
	UserName : String,
	comment: String
});

var tweetsSchema = new mongoose.Schema({
	Text: String,
	createdAt : String
});

var twitterSchema = new mongoose.Schema({
	fromUserId: String,
	fromUserName: String,
	tweets: [tweetsSchema],
	comment: [commentSchema]
});


module.exports = mongoose.model('Tweetcollection', twitterSchema);



