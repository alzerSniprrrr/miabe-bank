import * as angular from "angular";

export class VirementService {


    constructor(private $http) {
    }

    loadVirements() {
        // return fetch('/api/virements', {
        //   credentials: 'include',
        // }).then(r=>r.json());
        return this.$http.get('/api/virements', {
            credentials: 'include',
        });

    }

    delete(virement) {
        return this.$http.delete("/api/virements?id=" + virement.id,
            {
                credentials: 'include',
            })
    }

    addVirement(virement) {
        return this.$http.post('/api/virements', {text: virement},
            {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
    }

}

export default "VirementService";
