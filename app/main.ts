import 'angular';
import 'angular-ui-router';
import AboutComponent from './about/about';

let materialApp = angular.module("materialApp", ['ui.router']);

materialApp.config(Config);
materialApp.controller(AboutComponent);