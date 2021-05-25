import './dashboard.css';

const template = require("./dashboard.html");

import controller from "./dashboard.controller";

const component={
    template,
    controller,
    controllerAs: 'ctrl',
}

const DashboardComponent = {
    name: 'dashboard',
    component
};

export default DashboardComponent;
