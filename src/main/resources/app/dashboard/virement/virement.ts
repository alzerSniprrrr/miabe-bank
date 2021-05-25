import './virement.css';

const template = require("./virement.html");

import controller from "./virement.controller";

const component={
    template,
    controller,
    controllerAs: 'ctrl',
}

const LoginComponent = {
    name: 'virement',
    component
};

export default LoginComponent;
