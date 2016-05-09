(function() {
	var category = function() {
		return {
			restrict:"E",
			templateUrl : "app/views/category.html"
		}
	};
	angular.module('plannerApp')
        .directive('category', category);
})();