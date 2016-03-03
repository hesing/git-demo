(function(){
	function SinglePostCtrl(PostService, $stateParams){
		var vm =this;
		var postId = $stateParams.postId;
		PostService.getPost(postId).success(function(res){
			vm.post = res;
		})
	}

	angular.module("myDemo")
		.controller("SinglePostCtrl", SinglePostCtrl);
})();