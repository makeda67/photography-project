'use strict';

class Navbar {
    constructor (parentElement, links, style) {
        this.parentElement = parentElement;
        this.links = links;
        this.style = style;
        this.elements = null;
    }
    
    generate() {
        // generar dinamicamente los elementos
    this.elements = `<nav>
                        <img src="./logo_cabesa.png" style="width: 180px; margin-left:50px;">
                        <ul style="margin-right: 300px;" class="ul-top">`;
        this.links.forEach((link) => {
            this.elements += `
            <li>
                <a href="#0" type="button" url=${link.url}>${link.name}</a>
            </li>`;
        });
        this.elements += `</ul>
        </nav>`;
        this.render();
    }
    
    render() {
        // añadir elementos al DOM
        this.parentElement.innerHTML = this.elements;
    }

}

