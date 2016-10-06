angular
	.module('todoApp', ['ui-router'])
	.config('MainRouter');

	MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
	function MainRouter($stateProvider, $urlRouterProvider) {
		//ROUTE
	}

function MainRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: "/",
			templateURL: "home.html",
		})
		.state('archive', {
			url: "/archive",
			templateURL: "archive.html",
		});

		$urlRouterProvider.otherwise('/');
}
