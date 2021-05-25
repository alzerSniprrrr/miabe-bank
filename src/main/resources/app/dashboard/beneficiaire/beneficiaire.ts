import './beneficiaire.css';

const template = require("./beneficiaire.html");

import controller from "./beneficiaire.controller";

const component={
    template,
    controller,
    controllerAs: 'ctrl',
}

const BenefciaireComponent = {
    name: 'benefciaire',
    component
};

export default BenefciaireComponent;
