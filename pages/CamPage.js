'use strict';

function CamPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.loading = null;
    this.photos = null;
}

CamPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
    await this.connectToAPI();
    this.elements = `
        <div class="flash"></div>
        <div class="camPage">
        <h2>DISCOVER &nbsp;&nbsp;NEW&nbsp; PHOTOS!</h2>
        </div>
        <div>
        <section class="cards-container">
        `;
        this.elements += `
        <div class="bigPhoto">
        <div>
        <img src="${this.photos.download_url}">
        <p><b>Author:</b> ${this.photos.author}</p>
        <p><b>ID:</b> ${this.photos.id}</p>
        <p><b>Link:</b> <a href="${this.photos.url}">${this.photos.url}</a></p>
        </div>
        </div>
        <button class="shoot">SHOOT!</button>
        `;
    this.elements += `</section>
        `;
    
    
    this.render();
    
    

    var shootButton = document.querySelector('button');
    var self = this;
    shootButton.addEventListener('click', async () => {
        this.changeImage(self)
      
    });
}


CamPage.prototype.addListenersToNavbar = function () {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', changePage);
    })
}


CamPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

CamPage.prototype.connectToAPI = async function() {
    this.photos = await photographyServiceInstance.getAllPhotos();
}

CamPage.prototype.changeImage = function(self) {
    self.generate();
}