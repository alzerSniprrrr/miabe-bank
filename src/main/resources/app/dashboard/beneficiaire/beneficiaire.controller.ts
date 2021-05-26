import {UtilisateurService, default as userServiceName} from "../../service/UtilisateurService";
import {BeneficiaireService, default as beneficiaireServiceName} from "../../service/BeneficiaireService";
import {Compte} from "../../model/Compte";

export default class BeneficiaireCtrl {

    private static readonly $inject=[
        userServiceName,
        "$sce",
        beneficiaireServiceName,
        "$state"
    ]
    private beneficiaires: Array<any>;
    private nom: string;
    private prenom: string;
    private iban: string;
    private compte: Compte;
    private isSuccess: boolean = false;

    constructor(private userService:UtilisateurService, private $sce, private beneficiaireService:BeneficiaireService, private $state) {
    }

    $onInit() {
        this.userService.getCurrentUser()
            .then((response) => {
                this.loadBeneficiaires();
            });
    }

    loadBeneficiaires() {
        return this.beneficiaireService.loadBeneficiaires()
            .then((response) => {
                this.beneficiaires = response.data;
                return response;
            });
    }

    deleteBeneficiaire(beneficiaire){
        this.beneficiaireService.delete(beneficiaire)
            .then(()=>this.loadBeneficiaires());
    }

    async valider() {
        if (this.nom) {
           // await this.loadBeneficiaires();
            let response = await this.beneficiaireService.addBeneficiaire(this.iban, this.nom, this.prenom);
            if (response.status === 200) {
                this.closeNewBeneficiaire();
                this.isSuccess = true;
            }
        } else {
            alert("Il faut saisir un texte.")
        }

    }

    showUser(user){
        this.$state.go("user", {id:user.id})
    }

    closeNewBeneficiaire() {
        this.newBeneficiaireText = undefined;
        this.loadBeneficiaires();
    }

}
