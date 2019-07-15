'use strict';

function Router() {
    this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
    switch (url) {
        case '/':
            this.generateGalleryPage(parentElement);
            break;
        case '/gallery':
            this.generateCamPage(parentElement);
            break;
        default:
            this.generateGalleryPage(parentElement);
    } 
}

Router.prototype.generateGalleryPage = function(parentElement) {
    this.page = new GalleryPage(parentElement);
    this.page.generate();
}

Router.prototype.generateCamPage = function(parentElement) {
    this.page = new CamPage(parentElement);
    this.page.generate();
}

const routerInstance = new Router();