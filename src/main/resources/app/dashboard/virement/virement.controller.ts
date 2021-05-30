import {UtilisateurService, default as userServiceName} from "../../service/UtilisateurService";
import {VirementService, default as virementServiceName} from "../../service/VirementService";
import {CompteService, default as compteServiceName} from "../../service/CompteService";
import {BeneficiaireService, default as beneficiaireServiceName} from "../../service/BeneficiaireService";

export default class VirementCtrl {

    private static readonly $inject=[
        userServiceName,
        "$sce",
        virementServiceName,
        compteServiceName,
        beneficiaireServiceName,
        "$state"
    ]
    private virements: Array<any>;
    private beneficiaire: any;
    private beneficiaires: Array<any>;
    private compte: any;
    private comptes: Array<any>;
    private montant: number;
    private motif: number;
    private isSuccess: boolean = false;

    constructor(private userService:UtilisateurService, private $sce,private compteService:CompteService, private  beneficiaireService: BeneficiaireService, private virementService:VirementService, private $state) {




    }

    $onInit() {


        console.log("Test OnInit");
        this.compteService.getCompte(1)
            .then((response) => {
                this.comptes = response.data;
            });
        this.beneficiaireService.loadBeneficiaires()
            .then((response) => {
                this.beneficiaires = response.data;
            });

        this.userService.getCurrentUser()
            .then((response) => {
                this.loadVirements();
            });

    }

    loadVirements() {
        return this.virementService.loadVirements()
            .then((response) => {
                this.virements = response.data;
                console.log(this.virements)
                return response;
            });
    }

    deleteVirement(virement){
        this.virementService.delete(virement)
            .then(()=>this.loadVirements());
    }

    async valider() {

    }

    showUser(user){
        this.$state.go("user", {id:user.id})
    }

    closeNewVirement() {
        this.loadVirements();
    }

}
