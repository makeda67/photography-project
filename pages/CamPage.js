'use strict';

function CamPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.loading = null;
}

CamPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
    await this.connectToAPI();
    this.elements = `
        <header>
        <h2>Welcome to the photos page</h2>
        </header>
        <section class="cards-container">
        `;
    this.elements += '</section>';
    this.render();   
}

CamPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

CamPage.prototype.connectToAPI = async function() {
    this.photos = await photographyServiceInstance.getAllPhotos();
}