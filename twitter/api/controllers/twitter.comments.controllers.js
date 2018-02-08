var mongoose = require('mongoose');
var Twittercollection = mongoose.model('Tweetcollection');

// GET all reviews for a hotel
module.exports.tweetsGetAll = function(req, res) {
  var id = req.params.twitterId;

  console.log('GET tweet Id', id);

  Twittercollection
    .findById(id)
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding tweet");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("tweet not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Tweet ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });

};

var _addComment = function (req, res, tweet) {
  tweet.comment.push({
    UserName : req.body.UserName,
    comment : req.body.comment,
  });

  tweet.save(function(err, TweetUpdated) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(TweetUpdated.comment[TweetUpdated.comment.length - 1]);
    }
  });

};

module.exports.commentsAddOne = function(req, res) {

  var id = req.params.twitterId;

  console.log('POST review to twitterId', id);

  Twittercollection
    .findById(id)
    .select('comment')
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding food");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("Twitter id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Twitter ID not found " + id
        };
      }
      if (doc) {
        _addComment(req, res, doc);
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });


};

