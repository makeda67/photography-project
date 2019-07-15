'use strict';
class Layout  {
    constructor (root, style) {
    this.root = root;
    this.style = style;
    this.elements = null;
    this.header = null;
    this.main = null;
    this.footer;  
    }

    generate() {
    //generar elementos del DOM
        this.elements = `
            <header id="site-header"></header>
            <main id="site-main"></main>
            <footer id="site-footer"></footer>`;
        this.render();
        this.getContainers();
    }

    render() {
        //añadir los elementos al DOM
        this.root.innerHTML = this.elements;
    }

    getContainers() {
        //get main, header, footer del DOM
        this.header = document.querySelector('#site-header');
        this.main = document.querySelector('#site-main');
        this.footer = document.querySelector('#site-footer');
    }
}






