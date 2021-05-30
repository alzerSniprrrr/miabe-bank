import './compte_view.css';

const template = require("./compte_view.html");

import controller from "./compte_view.controller";

const component={
    template,
    controller,
    controllerAs: 'ctrl',
}

const CompteViewComponent = {
    name: 'compte_view',
    component
};

export default CompteViewComponent;
