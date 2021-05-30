import {UtilisateurService, default as userServiceName} from "../../../service/UtilisateurService";
import {CompteService, default as compteServiceName} from "../../../service/CompteService";

export default class CompteViewCtrl {

    private static readonly $inject=[
        userServiceName,
        "$sce",
        compteServiceName,
        "$state"
    ]
    private comptes: Array<any>;
    private type: string;
    private iban: string;
    private solde: number;
    private isSuccess: boolean = false;

    constructor(private userService:UtilisateurService,  private $sce:any,private compteService:CompteService, private $state:any) {
    }

    $onInit() {

        this.compteService.getCompte(1)
            .then((response) => {
                this.comptes = response.data;
            });

        this.userService.getCurrentUser()
            .then((response:any) => {

            });

    }


    async valider() {


    }

    /*loadComments() {
        return this.commentService.loadComments()
            .then((response) => {
                this.comments = response.data;
                return response;
            });
    }

    deleteComment(comment){
        this.commentService.delete(comment)
            .then(()=>this.loadComments());
    }

    async valider() {
        if (this.newCommentText) {
            await this.loadComments();
            let response = await this.commentService.addComment(this.newCommentText);
            if (response.status === 200) {
                this.closeNewComment();
            }
        } else {
            alert("Il faut saisir un texte.")
        }

    }

    showUser(user){
        this.$state.go("user", {id:user.id})
    }

    closeNewComment() {
        this.newCommentText = undefined;
        this.loadComments();
    }
*/
}
