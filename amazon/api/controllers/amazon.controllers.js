var mongoose = require('mongoose');
var Amazoncollection = mongoose.model('Amazoncollection');

// var Newcollection = mongoose.model('Newcollection');

// Newcollection
module.exports.foodGetAll = function(req, res) {

  console.log('GET all the food');
  var offset = 0;
  var count = 40;
  var maxCount = 100;

  // if (req.query && req.query.offset) {
  //   offset = parseInt(req.query.offset, 10);
  // }

  // if (req.query && req.query.count) {
  //   count = parseInt(req.query.count, 10);
  // }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, count and offset must both be numbers"
      });
    return;
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({
        "message" : "Count limit of " + maxCount + " exceeded"
      });
    return;
  }

  Amazoncollection
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, amazoncollections) {
      // console.log(err);
      // console.log(amazoncollections);
      if (err) {
        console.log("Error finding hotels");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found", amazoncollections.length);
        res
          .json(amazoncollections);
      }
    });

};

module.exports.foodGetOne = function(req, res) {
  var id = req.params.foodId;

  console.log('GET foodId', id);

  Amazoncollection
    .findById(id)
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding hotel");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("Food not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Food ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });

};
