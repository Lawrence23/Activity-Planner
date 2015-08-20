app.controller("CategoryCtrl",['$scope','$localStorage',function ($scope,$localStorage) {
		$scope.categories =[];
		$scope.activity;
		if($localStorage.categories){
			$scope.categories = $localStorage.categories;
		}
		
		$scope.addNewCategory = function(){
			$scope.categories.push({
				category : $scope.category,
				activities : []
			});
			$scope.category = "";
			$localStorage.categories = $scope.categories;
		}
		
		$scope.removeCategory = function(index){
			$scope.categories.splice(index,1);
		}
		
		$scope.addNewActivity = function(index,activity){
			$scope.categories[index].activities.push(activity);
			$localStorage.categories = $scope.categories;
			activity="";
		}
		
		$scope.removeActivity = function(index,parent){
			debugger;
			$scope.categories[parent].activities.splice(index,1);
		}

		$scope.todoSortable = {
			cursor : "move",
			tolerance : "intersect"
		};
}]);

