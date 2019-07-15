'use strict';

class Router {
    constructor() {
      this.page = null;  
    }
  
    buildDom(url, parentElement) {
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

    generateGalleryPage(parentElement) {
        this.page = new GalleryPage(parentElement);
        this.page.generate();
    }

    generateCamPage(parentElement) {
        this.page = new CamPage(parentElement);
        this.page.generate();
    }
}

const routerInstance = new Router();





