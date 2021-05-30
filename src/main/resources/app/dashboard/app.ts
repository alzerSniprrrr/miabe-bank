import angular  from 'angular';
import Dashboard from "./dashboard";
import User from "./user/user";
import Virement from "./virement/virement"
import Beneficiaire from "./beneficiaire/beneficiaire"
import CompteView from "./compte/compte_view/compte_view";
import "../style/app.css";import "jquery";


import UserComponent from './user/user';
import DashboardComponent from "./dashboard";
import VirementComponent from "./virement/virement"
import BeneficiaireComponent from "./beneficiaire/beneficiaire"
import CompteViewComponent from "./compte/compte_view/compte_view";
import uirouter from '@uirouter/angularjs';

import "@fortawesome/fontawesome-free/css/all.min.css";

import {default as userServiceName, UtilisateurService} from "../service/UtilisateurService";
import {default as virementServiceName, VirementService} from "../service/VirementService";
import {default as beneficiaireServiceName, BeneficiaireService} from "../service/BeneficiaireService";
import {default as compteServiceName, CompteService} from "../service/CompteService";

import dashboard from "./dashboard";
import virement from "./virement/virement";
import compte_view from "./compte/compte_view/compte_view";

import beneficiaire from "./beneficiaire/beneficiaire";
import {Compte} from "../model/Compte";
// Declare livredor level module which depends on views, and core components
angular.module('app', [uirouter])
    .component(Dashboard.name, dashboard.component)
    .component(User.name, User.component)
    .component(Virement.name, virement.component)
    .component(Beneficiaire.name, beneficiaire.component)
    .component(CompteView.name, compte_view.component)
    .service(userServiceName, UtilisateurService)
    .service(virementServiceName, VirementService)
    .service(beneficiaireServiceName, BeneficiaireService)
    .service(compteServiceName, CompteService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider:any, $urlRouterProvider:any) {

        const home = {
            name: "home",
            state: {
                url: "/",
                views: {
                    'main@': {
                        template: '<div class="jumbotron jumbotron-fluid">\n' +
                            '  <div class="container">\n' +
                            '    <h1 class="display-4">Bienvenue sur Miabe Bank</h1>\n' +
                            '    <p class="lead">Une banque à votre service.</p>\n' +
                            '  </div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<!-- FIN HERO -->\n' +
                            '\n' +
                            '<!-- FEATURES -->\n' +
                            '<h2 style="text-align: center">Nos services</h2>\n' +
                            '\n' +
                            '<div class="row">\n' +
                            '  <div class="col-12 col-lg-4">\n' +
                            '    <div class="card">\n' +
                            '\n' +
                            '      <img style = "width:250px; height: 250px; align-self: center" src="../../public/img/virement-bancaire.png" class="card-img-top" alt="virement-bancaire-feature"/>\n' +
                            '      <div class="card-body">\n' +
                            '        <h5 class="card-title">Virement instatané</h5>\n' +
                            '        <p class="card-text">Envoyez votre argent au bout de 1 min</p>\n' +
                            '      </div>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="col-12 col-lg-4">\n' +
                            '    <div class="card">\n' +
                            '      <img style = "width:250px; height: 250px; align-self: center" src="../../public/img/shield.png" class="card-img-top" alt="...">\n' +
                            '      <div class="card-body">\n' +
                            '        <h5 class="card-title">Sécurité</h5>\n' +
                            '        <p class="card-text">Tous vos opérations sont sécurisées</p>\n' +
                            '      </div>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="col-12 col-lg-4">\n' +
                            '    <div class="card">\n' +
                            '      <img style = "width:250px; height: 250px; align-self: center" src="../../public/img/customer-service.png" class="card-img-top" alt="...">\n' +
                            '\n' +
                            '      <div class="card-body">\n' +
                            '        <h5 class="card-title">Service Client</h5>\n' +
                            '        <p class="card-text">Un service client pour répondre à toute vos demandes</p>\n' +
                            '      </div>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '</div>\n' +
                            '<!-- FIN FEATURES -->'
                    },
                    'nav@': {
                        template: '<a class="navbar-brand" href="#!/">Miabe Bank</a>\n' +
                            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n' +
                            '  <span class="navbar-toggler-icon"></span>\n' +
                            '</button>\n' +
                            '<div class="collapse navbar-collapse" id="navbarNav">\n' +
                            '  <ul class="navbar-nav">\n' +
                            '\n' +
                            '\n' +
                            '  </ul>\n' +
                            '\n' +
                            '</div>\n' +
                            '\n' +
                            '\n' +
                            '<!--<button class="btn btn-outline-success" >--><a ui-sref=".login" style="text-decoration: none; color:black ">Je suis client</a><!--</button>-->\n' +
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                            '<button class="btn btn-outline-success" ><a href="" style="text-decoration: none; color:black">S\'inscrire</a></button>\n' +
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                            '<button class="btn btn-outline-success" ><a href="" style="text-decoration: none; color:black">Je suis admin</a></button>\n'
                    }

                }
            }
        };

        const dashboard = {
            name: "dashboard",
            state: {
                url: "/dashboard",
                views: {
                    'main@': {
                        component: DashboardComponent.name
                    },
                    'nav@': {
                        template: '<div class="container-fluid">\n' +
                            '  <a class="navbar-brand" href="#!/">Miabe Bank</a>\n' +
                            '  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n' +
                            '    <span class="navbar-toggler-icon"></span>\n' +
                            '  </button>\n' +
                            '  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n' +
                            '    <div class="navbar-nav">\n' +
                            '      <a class="nav-link active" aria-current="page" href="#!/dashboard">Dashboard</a>\n' +
                            '      <a class="nav-link" href="#!/dashboard/virement">Virements</a>\n' +
                            '      <a class="nav-link" href="#!/dashboard/account">Mes comptes</a>\n' +
                            '      <a class="nav-link" href="">Mes operations</a>\n' +
                            '      <a class="nav-link" href="">Mon profil</a>\n' +
                            '      <a class="nav-link" href=""> Déconnexion </a>\n' +
                            '\n' +
                            '\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '</div>'
                    }
                }
            }
        };

        const user = {
            name: "user",
            state: {
                url: "/user?id",
                views: {
                    'main@': {
                        component: UserComponent.name
                    }
                }
            }
        };

        const virement = {
            name: "dashboard.virement",
            state: {
                url: "/virement",
                views: {
                    'main@': {
                        component: VirementComponent.name
                    }
                }
            }
        };

        const beneficiaire = {
            name: "dashboard.beneficiaire",
            state: {
                url: "/beneficiaire",
                views: {
                    'main@': {
                        component: BeneficiaireComponent.name
                    }
                }
            }
        };


        const compte_view = {
            name: "dashboard.compte_view",
            state: {
                url: "/compte_view",
                views: {
                    'main@': {
                        component: CompteViewComponent.name
                    }
                }
            }
        };





        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state(home.name, home.state);
        $stateProvider
            .state(dashboard.name, dashboard.state);

        $stateProvider
            .state(user.name, user.state);

        $stateProvider
            .state(virement.name, virement.state);
        $stateProvider
            .state(beneficiaire.name, beneficiaire.state)

        $stateProvider
            .state(compte_view.name, compte_view.state)

    }])


angular.bootstrap(document.body, ['app']);
