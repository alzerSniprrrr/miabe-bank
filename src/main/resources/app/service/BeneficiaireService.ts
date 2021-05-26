import * as angular from "angular";
import {Beneficiaire} from "../model/Beneficiaire";
import beneficiaire from "../dashboard/beneficiaire/beneficiaire";
import { Injectable } from '@angular/core';

export class BeneficiaireService {

    beneficiaire1 = new Beneficiaire();

    constructor(private $http) {
    }

    baseURL: string = "http://localhost:8080/api/beneficiaires";


    loadBeneficiaires() {
        // return fetch('/api/beneficiaires', {
        //   credentials: 'include',
        // }).then(r=>r.json());
        return this.$http.get(this.baseURL, {
            credentials: 'include',
        });

    }

    delete(beneficiaire) {
        return this.$http.delete(this.baseURL +"?id=" + beneficiaire.id,
            {
                credentials: 'include',
            })
    }

    addBeneficiaire(iban, nom, prenom) {
        this.beneficiaire1.iban = iban;
        this.beneficiaire1.nom = nom;
        this.beneficiaire1.prenom = prenom;
        const body=JSON.stringify(this.beneficiaire1);
        return this.$http.post(this.baseURL+"/add", body,
            {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
    }

}

export default "BeneficiaireService";
