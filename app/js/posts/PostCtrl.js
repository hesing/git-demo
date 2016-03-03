(function(){
	function PostCtrl(PostService){
		var vm =this;
		vm.name = "Heansttdd";

		PostService.getPosts().success(function(res){
			vm.posts = res;
		})

		vm.deletePost = function(post){
			PostService.removePost(post.id).success(function(res){
				vm.posts.splice(vm.posts.indexOf(post), 1);
			})
		}
	}

	angular.module("myDemo")
		.controller("PostCtrl", PostCtrl);
})();