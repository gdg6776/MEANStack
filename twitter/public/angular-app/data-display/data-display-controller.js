angular.module('Krt').controller('TwitterController', TwitterController);

function TwitterController($route, $routeParams, twitterDataFactory){
	var vm =this;
	var id = $routeParams.twitterId;

	vm.isSubmitted = false;
  console.log($routeParams.twitterId);

	twitterDataFactory.tweetDisplay(id).then(function(response){
		vm.tweet = response.data;
    console.log(vm.tweet);

	});

	vm.addComment = function() {
    var postData = {
      UserName: vm.UserName,
      comment: vm.comment,
    };
    if (vm.reviewForm.$valid) {
      twitterDataFactory.postComment(id, postData).then(function(response) {
        if (response.status === 200) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };


}


// angular.module('meanhotel').controller('HotelController', HotelController);

// console.log("inside display controller");
// function HotelController($route, $routeParams, hotelDataFactory) {
//   var vm = this;
//   var id = $routeParams.id;
//   console.log($routeParams.id);
//   vm.isSubmitted = false;
//   console.log("In display controller");
//   hotelDataFactory.hotelDisplay(id).then(function(response) {
//     vm.hotel = response.data;
//     vm.stars = _getStarRating(response.data.stars);
//   });

//   function _getStarRating(stars) {
//     return new Array(stars);
//   }

//   vm.addReview = function() {
//     var postData = {
//       name: vm.name,
//       rating: vm.rating,
//       review: vm.review
//     };
//     if (vm.reviewForm.$valid) {
//       hotelDataFactory.postReview(id, postData).then(function(response) {
//         if (response.status === 200) {
//           $route.reload();
//         }
//       }).catch(function(error) {
//         console.log(error);
//       });
//     } else {
//       vm.isSubmitted = true;
//     }
//   };

// }
