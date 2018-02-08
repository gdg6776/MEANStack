var express = require('express');
var router = express.Router();

// var ctrlAmazon = require('../controllers/amazon.controllers.js');
// var ctrlAmazonReviews = require('../controllers/amazon.reviews.controllers.js');


var ctrlTweet = require('../controllers/twitter.controllers.js');
var ctrlTweetComment = require('../controllers/twitter.comments.controllers.js');


router
  .route('/twitter')
  .get(ctrlTweet.tweetsGetAll)
  // .post(ctrlHotels.hotelsAddOne);

 router
  .route('/twitter/:twitterId')
  .get(ctrlTweet.tweetGetOne)

 router
  .route('/twitter/:twitterId/comments')
  .get(ctrlTweetComment.tweetsGetAll)
  .post(ctrlTweetComment.commentsAddOne);



 // router
 //  .route('/tweet')
 //  .get(ctrlAmazon.foodGetAll)
 //  // .post(ctrlHotels.hotelsAddOne);

 // router
 //  .route('/tweet/:tweetId')
 //  .get(ctrlAmazon.foodGetOne)

 // router
 //  .route('/tweet/:tweetId/comments')
 //  .get(ctrlAmazonReviews.reviewsGetAll)


module.exports = router;