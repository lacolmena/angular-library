angular
	.module('library', [])
	.config(['$routeProvider', function($routeProvider) {
		// Configure routes
		$routeProvider
			.when('/', {
				templateUrl: 'list.html'
			})
			.when('/book/:index', {
				templateUrl: 'edit.html',
				controller: 'Edit'
			})
			.when('/add', {
				templateUrl: 'edit.html',
				controller: 'Add'
			})
			.when('/delete/:index', {
				templateUrl: 'edit.html',
				controller: 'Delete'
			})
	}])
	.controller('Books', function($scope, $http) {
		$http.get('books/books.json').success(function(data) {
			$scope.books = data;
		});
		$scope.order = "title";
	})
	.controller('Edit', function($scope, $routeParams) {
		$scope.book = $scope.books[$routeParams.index];
		$scope.index = $routeParams.index;
	})
	.controller('Add', function($scope) {
		var length = $scope.books.push ({
			id: $scope.books.length,
			title: 'New book',
			author: '',
			genre: '',
			country: '',
			img: ''
		});
		$scope.book = $scope.books[length - 1];
		$scope.index = length - 1;
	})
	.controller('Delete', function($scope, $routeParams, $location) {
		$scope.books.splice($routeParams.index, 1);
		$location.path('/').replace();
	})