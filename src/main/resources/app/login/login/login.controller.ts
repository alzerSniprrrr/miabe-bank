import {UtilisateurService, default as utilisateurServiceName} from "../../service/UtilisateurService";

export default class LoginCtrl {
    private id: string;
    private password: string;


    private static readonly $inject = ["$state", utilisateurServiceName];

    constructor(private $state, private userService:UtilisateurService) {
    }

    $onInit() {
        this.logged();
    }

    async login() {
        let data = new FormData();
        data.append("username", this.id);
        data.append("password", this.password);
        await this.userService.getCurrentUser();
        this.userService.login(data)
            .then((response) => {
                if (response.status === 200)
                    document.location.href = "/dashboard";
            })
    }

    logged() {
        this.userService.getCurrentUser()
            .then((user) => {
                if (user) {
                    this.logged = user;
                    document.location.href="/dashboard";
                }

            })
    }
}
