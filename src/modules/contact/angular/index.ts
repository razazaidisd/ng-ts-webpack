import "angular";
import "angular-route";
import {PageContactComponent} from "./components/pageContact/PageContactComponent";
import {config as routesConfig} from "./configs/routes";

angular.module("app.contact", ["ngRoute"])
    .component("pageContact", new PageContactComponent())
    .config(routesConfig);