import * as angular from "angular";
import {Beneficiaire} from "../model/Beneficiaire";
import beneficiaire from "../dashboard/beneficiaire/beneficiaire";
import { Injectable } from '@angular/core';

export class CompteService {


    constructor(private $http) {
    }

    baseURL: string = "http://localhost:8080/api/comptes";


     getCompte(id) {

        console.log(id);
        return this.$http.get(`http://localhost:8080/api/comptes/${id}`, {
                credentials: 'include',}).then(resp => {
                if (resp.status === 200) {
                    return resp.data;
                }
            })
            .catch((e) => {
            });
    }

}

export default "CompteService";
