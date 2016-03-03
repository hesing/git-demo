(function() {
    function EditPostCtrl(PostService, $state, $stateParams) {
        var vm = this;
        vm.formData = {};

        var postId = $stateParams.postId;
        PostService.getPost(postId).success(function(res) {
            vm.formData = res;
        })

        // vm.formData = {};
        vm.updatePost = function() {
            PostService.updatePost(vm.formData).success(function(res) {
                $state.go('posts');
            })
        }
    }

    angular.module("myDemo")
        .controller("EditPostCtrl", EditPostCtrl);
})();
