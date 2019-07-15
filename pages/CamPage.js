'use strict';

class CamPage {
    constructor (parentElement) {
        this.parentElement = parentElement;
        this.elements = null;
        this.loading = null;
        this.photos = null;
    }
    
    async generate() {
 
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
       
        const shootButton = document.querySelector('button');
        const self = this;
        shootButton.addEventListener('click', async () => {
            this.changeImage(self)
      
          
        });
    }
    
    addListenersToNavbar() {
        const anchors = document.querySelectorAll('nav a');
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', changePage);
        })
    }
    
    
    render() {
        this.parentElement.innerHTML = this.elements;
    }
    
    async connectToAPI() {
        this.photos = await photographyServiceInstance.getAllPhotos();
    }
    
    changeImage(self) {
        self.generate();
    }

}

