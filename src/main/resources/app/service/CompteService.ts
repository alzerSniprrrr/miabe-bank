import * as angular from "angular";
import {Compte} from "../model/Compte";
import { Injectable } from '@angular/core';

export class CompteService {

    compte1 = new Compte();

    constructor(private $http) {
    }

    baseURL: string = "http://localhost:8080/api/comptes";

    getCompte(id){

        return this.$http
            .get(`http://localhost:8080/api/comptes/${id}`, {
                credentials: 'include',
            });

    }

}

export default "CompteService";
