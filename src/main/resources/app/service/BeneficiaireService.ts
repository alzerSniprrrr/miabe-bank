import * as angular from "angular";

export class BeneficiaireService {


    constructor(private $http) {
    }

    loadBeneficiaires() {
        // return fetch('/api/beneficiaires', {
        //   credentials: 'include',
        // }).then(r=>r.json());
        return this.$http.get('/api/beneficiaires', {
            credentials: 'include',
        });

    }

    delete(beneficiaire) {
        return this.$http.delete("/api/beneficiaires?id=" + beneficiaire.id,
            {
                credentials: 'include',
            })
    }

    addBeneficiaire(beneficiaire) {
        return this.$http.post('/api/beneficiaires', {text: beneficiaire},
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
