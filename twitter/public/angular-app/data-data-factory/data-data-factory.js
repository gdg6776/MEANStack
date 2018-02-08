angular.module('Krt').factory('twitterDataFactory', twitterDataFactory);


function twitterDataFactory($http){
	return{
		tweetList: tweetList,
		tweetDisplay: tweetDisplay,
		postComment: postComment
	};


	function tweetList(){
		return $http.get('/api/twitter?count=10').then(complete).catch(failed);
	}

	function tweetDisplay(id) {
    return $http.get('/api/twitter/' + id).then(complete).catch(failed);
//   }
}

// angular.module('meanhotel').factory('hotelDataFactory', hotelDataFactory);

// function hotelDataFactory($http) {
//   return {
//     hotelList: hotelList,
//     hotelDisplay: hotelDisplay,
//     postReview: postReview
//   };

//   function hotelList() {
//     return $http.get('/api/hotels?count=10').then(complete).catch(failed);
//   }

//   function hotelDisplay(id) {
//     return $http.get('/api/hotels/' + id).then(complete).catch(failed);
//   }

  function postComment(id, comment) {
    return $http.post('/api/twitter/' + id + '/comments', comment).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }

}
