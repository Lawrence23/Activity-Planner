(function() {
	var CategoryCtrl = function($scope, $localStorage) {
		$scope.categories = [];
		$scope.activity;
		if($localStorage.categories) {
			$scope.categories = $localStorage.categories;
		}

		$scope.addNewCategory = function() {
			$scope.categories.push({
				category : $scope.category,
				activities : []
			});
			$scope.category = "";
			$localStorage.categories = $scope.categories;
		};

		$scope.removeCategory = function(index) {
			$scope.categories.splice(index,1);
		};

		$scope.addNewActivity = function(index, activity) {
			var activityTemp =  angular.copy(activity);
			$scope.categories[index].activities.push(activityTemp);
			$localStorage.categories = $scope.categories;
			$scope.categories[index].activity = '';
		};

		$scope.removeActivity = function(index, parent) {
			$scope.categories[parent].activities.splice(index,1);
		};

		$scope.todoSortable = {
			cursor : "move",
			tolerance : "intersect"
		};
	};
	angular.module('plannerApp')
        .controller('CategoryCtrl', CategoryCtrl);
})();