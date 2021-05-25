import {UtilisateurService, default as userServiceName} from "../../service/UtilisateurService";

export default class UserCtrl {

    private static readonly $inject=[
        userServiceName,
        "$stateParams"
    ]
    private user: any;

    constructor(private userService:UtilisateurService, private $stateParams) {
    }

    $onInit() {
        this.userService.getUser(this.$stateParams.id)
            .then((response) => {
                console.log("user",response);
                this.user = response;
            });
    }

}
