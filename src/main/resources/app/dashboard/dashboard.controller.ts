import {UtilisateurService, default as userServiceName} from "../service/UtilisateurService";
import {CompteService, default as compteServiceName} from "../service/CompteService";

export default class DashboardCtrl {

    private static readonly $inject=[
        userServiceName,
        "$sce",
        compteServiceName,
        "$state"
    ]
    private soldeCompte: string='';

    constructor(private userService:UtilisateurService, private compteService:CompteService, private $sce:any, private $state:any) {
    }

    $onInit() {
        this.compteService.getCompte(1)
            .then((response:any) => {

                console.log(response);
                this.soldeCompte = response.solde

            });
        this.userService.getCurrentUser()
            .then((response:any) => {

            });

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
