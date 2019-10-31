import Vue from "vue/dist/vue.esm.js";
import 'view-design/dist/styles/iview.css';
import App from "./components/App"

import {
    Drawer
} from "view-design";

Vue.component("Drawer", Drawer);
Vue.component('app', App);

function insertApp() {
    let sideBar = document.createElement('div');
    sideBar.id = "iview-app";
    sideBar.innerHTML = '<app></app>';
    let mainDom = document.getElementsByTagName('main')[0];
    mainDom.appendChild(sideBar);
    new Vue({
       el: "#iview-app",
    });
}

(function insertViewIcons() {
    let ViewIcons = document.createElement('style');
    ViewIcons.type = 'text/css';
    ViewIcons.textContent = `
        @font-face {
            font-family: "Ionicons";
            src: url('${ window.chrome.extension.getURL("fonts/ionicons.woff2")}') format('woff2'),
            url('${ window.chrome.extension.getURL("fonts/ionicons.woff")}') format('woff'),
            url('${ window.chrome.extension.getURL("fonts/ionicons.ttf")}') format('truetype');
        }
    `;
    document.head.appendChild(ViewIcons);
})();
document.body.onload = insertApp;











