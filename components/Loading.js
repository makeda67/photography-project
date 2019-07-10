'use strict';

function Loading(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
}

Loading.prototype.generate = function() {
    this.elements = '<p>TAKING A PICTURE...</p>';
    this.render();
}

Loading.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}