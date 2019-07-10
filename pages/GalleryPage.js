'use strict';

function GalleryPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
}


GalleryPage.prototype.generate = function() {
this.elements = `
    <main>
    <h1>GalleryPage</h1>
    <p>Some photos around here</p>
    </main>
`;
    this.render();
}

GalleryPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}