'use strict';

function Navbar(parentElement, links, style) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
}

Navbar.prototype.generate = function () {
    // generar dinamicamente los elementos
this.elements = `<nav>
                    <img src="./logo_cabesa.png" style="width: 200px; margin-left:50px;">
                    <ul style="margin-right: 50px;">`;
    this.links.forEach((link) => {
        this.elements += `
        <li>
            <a href="#0" url=${link.url}>${link.name}</a>
        </li>`;
    });
    this.elements += `</ul>
    </nav>`;
    this.render();
}

Navbar.prototype.render = function () {
    // añadir elementos al DOM
    this.parentElement.innerHTML = this.elements;
}