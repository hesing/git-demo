(function() {
    function NewPostCtrl(PostService, $state) {
        var vm = this;
        vm.formData = {};
        vm.savePost = function() {
            PostService.savePost(vm.formData).success(function(res) {
                $state.go('posts');
            })
        }
    }

    angular.module("myDemo")
        .controller("NewPostCtrl", NewPostCtrl);
})();
