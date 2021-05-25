import {UtilisateurService, default as userServiceName} from "../../service/UtilisateurService";
import {BeneficiaireService, default as beneficiaireServiceName} from "../../service/BeneficiaireService";

export default class BeneficiaireCtrl {

    private static readonly $inject=[
        userServiceName,
        "$sce",
        beneficiaireServiceName,
        "$state"
    ]
    private beneficiaires: Array<any>;
    private newBeneficiaireText: string;

    constructor(private userService:UserService, private $sce, private beneficiaireService:BeneficiaireService, private $state) {
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
        if (this.newBeneficiaireText) {
            await this.loadBeneficiaires();
            let response = await this.beneficiaireService.addBeneficiaire(this.newBeneficiaireText);
            if (response.status === 200) {
                this.closeNewBeneficiaire();
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
