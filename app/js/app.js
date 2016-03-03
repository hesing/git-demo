(function(){
	angular.module("myDemo", ['ui.router'])
		.config(function($stateProvider){

			$stateProvider
			.state('posts', {
	            url: '/posts',
	            templateUrl: 'js/posts/posts.html'
        	})
			.state('post', {
	            url: '/posts/:postId',
	            templateUrl: 'js/posts/single-post.html',
	            controller: 'SinglePostCtrl',
	            controllerAs: 'sp'
        	})
			.state('editpost', {
	            url: '/posts/:postId/edit',
	            templateUrl: 'js/posts/edit-post.html',
	            controller: 'EditPostCtrl',
	            controllerAs: 'ep'
        	})
			.state('newpost', {
	            url: '/create-post',
	            templateUrl: 'js/posts/new-post.html',
	            controller: 'NewPostCtrl',
	            controllerAs: 'np'
        	})
		});
})();