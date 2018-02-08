var mongoose = require('mongoose');
var Amazoncollection = mongoose.model('Amazoncollection');

// GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
  var id = req.params.foodId;
  var dict = [];
  console.log('GET reviews for foodId', id);
  Amazoncollection
  	.findById(id)
  	.exec(function(err, doc){
	  		var response = {
	        status : 200,
	        message : ""
	      };
  		if (err) {
        console.log("Error finding food");
        response.status = 500;
        response.message = err;
      }else if(!doc) {
        console.log("Food id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Food ID not found " + id
        };
      }else{
      	Amazoncollection
  		.find({ProductId: doc.ProductId})
  		.exec(function(err, doc){
	  		if (err) {
		        console.log("Error finding reviews");
		        response.status = 500;
		        response.message = err;
	     	 }else if(!doc) {
		       //Need to put something here.
	     	 }else{
	     	 	for(var i =0; i < doc.length; i++){
	     	 		dict.push({
    				key:   doc[i].ProfileName,
    				value: doc[i].Text
					});
	     	 	}
	     	 }
	     	  res
        	.status(response.status)
        	.json(dict);
 		 });
      }  		
  	}); 
};

var _addReview = function (req, res, food) {
   console.log(parseInt((new Date().getTime() / 1000).toFixed(0)).toString());
  food.comment.push({
    ProfileName : req.body.ProfileName,
    Score : parseInt(req.body.Score, 10),
    Text : req.body.Text,
    Time: parseInt((new Date().getTime() / 1000).toFixed(0)).toString()
  });

  food.save(function(err, foodUpdated) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(foodUpdated.comment[foodUpdated.comment.length - 1]);
    }
  });

};

module.exports.reviewsAddOne = function(req, res) {

  var id = req.params.foodId;

  console.log('POST review to foodId', id);

  Amazoncollection
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
        console.log("Food id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Food ID not found " + id
        };
      }
      if (doc) {
        _addReview(req, res, doc);
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });


};

