  (function () {
  'use strict';

    angular.module('myApp')
      .directive('myProject', projectDirective);

      function projectDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/partials/project.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = ["$log", "myProjects", "$state"]

      function controller ($log, myProjects, $state) {
        var vm = this;
        vm.project = myProjects.getProject($state.params.name);
        console.log(vm.project);
      }
}());
