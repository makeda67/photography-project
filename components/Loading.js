'use strict';

class Loading {
    constructor (parentElement) {
        this.parentElement = parentElement;
        this.elements = null;  
    }
    
    generate() {
        this.elements = '<p>TAKING A PICTURE...</p>';
        this.render();
    }
    
    render() {
        this.parentElement.innerHTML = this.elements;
    }

}

