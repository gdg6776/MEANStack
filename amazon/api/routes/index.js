var express = require('express');
var router = express.Router();

var ctrlAmazon = require('../controllers/amazon.controllers.js');
var ctrlAmazonReviews = require('../controllers/amazon.reviews.controllers.js');


var ctrlTweet = require('../controllers/tweet.controllers.js');
var ctrlTweetComment = require('../controllers/tweet.comments.controllers.js');


router
  .route('/amazon')
  .get(ctrlAmazon.foodGetAll)
  // .post(ctrlHotels.hotelsAddOne);

 router
  .route('/amazon/:foodId')
  .get(ctrlAmazon.foodGetOne)

 router
  .route('/amazon/:foodId/reviews')
  .get(ctrlAmazonReviews.reviewsGetAll)
  .post(ctrlAmazonReviews.reviewsAddOne);



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