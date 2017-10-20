/**
 * Created by XPHLR on 2017/10/19.
 */

var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tab", {
            url: "/tab",
            templateUrl: "App/View/tab.html",
            controller: "tabController"
        })
        .state("money", {
            url: "/money",
            templateUrl: "App/View/money.html",
            controller: "moneyController"
        });
    $urlRouterProvider.otherwise("/money");
});