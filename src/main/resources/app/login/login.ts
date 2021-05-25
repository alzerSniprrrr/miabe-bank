//import {bootstrap, module} from 'angular';
import angular from "angular";
import Login from "./login/login";
//
import uirouter from '@uirouter/angularjs';
import LoginComponent from './login/login'
import {default as userServiceName, UtilisateurService} from "../service/UtilisateurService";

// @ts-ignore
angular.module('login', [
    uirouter,
])
    .component(Login.name, Login.component)
    .service(userServiceName, UtilisateurService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider:any, $urlRouterProvider:any) {


        const login = {
            name: "login",
            state: {
                url: "/login",
                views: {
                    'main@': {
                        component: LoginComponent.name
                    }
                }
            }
        };

        const error = {
            name: "login.error",
            state: {
                url: "/error",
                views: {
                    'error@login': {
                        controller: function ($scope, $timeout, $state) {
                            $timeout(() => alert("Couple login/password incorrect!"), 100);
                            $state.go("login");
                        }
                    }
                }
            }
        };


        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state(login.name, login.state)
            .state(error.name, error.state)

    }])
;
angular.bootstrap(document.body, ['login']);
