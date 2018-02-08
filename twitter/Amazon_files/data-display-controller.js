angular.module('Krt').controller('AmazonController', AmazonController);

function AmazonController($route, $routeParams, amazonDataFactory){
	var vm =this;
	var id = $routeParams.foodId;
	console.log($routeParams.foodId);

	vm.isSubmitted = false;

	amazonDataFactory.foodDisplay(id).then(function(response){
		vm.food = response.data;

	});

	vm.addReview = function() {
    var postData = {
      ProfileName: vm.ProfileName,
      Score: vm.Score,
      Text: vm.Text,
      Time: parseInt((new Date().getTime() / 1000).toFixed(0)).toString()
    };
    if (vm.reviewForm.$valid) {
      amazonDataFactory.postReview(id, postData).then(function(response) {
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
