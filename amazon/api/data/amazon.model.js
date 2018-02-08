var mongoose = require('mongoose');
mongoose.set('debug', true);


var commentSchema = new mongoose.Schema({
	ProfileName: String,
	Score : Number,
	Text: String,
	Time: Number
});

var amazonSchema = new mongoose.Schema({
	ProductId: String,
	Summary: String,
	comment: [commentSchema]
});

module.exports = mongoose.model('Amazoncollection', amazonSchema);



