(function(){
	function PostService($http){
		this.getPosts = function(){
			return $http.get('http://hkapi.azurewebsites.net/posts');
		};
		this.getPost = function(postId){
			return $http.get('http://hkapi.azurewebsites.net/posts/'+postId);
		};
		this.savePost = function(formData){
			return $http.post('http://hkapi.azurewebsites.net/posts/', formData);
		};
		this.updatePost = function(formData){
			return $http.put('http://hkapi.azurewebsites.net/posts/', formData);
		};
		this.removePost = function(postId){
			return $http.delete('http://hkapi.azurewebsites.net/posts/'+postId);
		};
	}

	angular.module("myDemo")
		.service("PostService", PostService);
})();