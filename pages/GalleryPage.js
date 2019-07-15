'use strict';

class GalleryPage {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.elements = null;
        this.loading = null;
        this.photos = null;
        this.arrayOfImages = [null, null, null, null, null, null, null];
    }
    
    async generate() {
        this.loading = new Loading(this.parentElement);
        this.loading.generate();
        this.elements = `
        <main>
        <h1>GalleryPage</h1>
        <p>Enjoy this random photos, click on them and scroll with left and right keys to take a better look.</p>
        <div class="gallery">
        `;  
        this.photos = await Promise.all(this.arrayOfImages.map(async () => {
            return await this.connectToAPI();
    
        }))
    
        this.photos.forEach((photo) => {
            this.elements += `
            <div class="image-container">
            <a href="${photo.download_url}" data-lightbox="mygallery"><img src="${photo.download_url}"></a>
            </div>
     
            `;
        })
    
        this.elements += `<button class="shoot-gallery">REFRESH!</button> </div>
            </main>
            `;
        this.render();
    
    }
    
    render() {
        this.parentElement.innerHTML = this.elements;
    
        const shootButton = document.querySelector('.shoot-gallery');
    
        shootButton.addEventListener('click', () => {
            console.log("click")
            this.changeImage(this)
            
        });
    }
    
    async connectToAPI() {
        const photo =  await galleryServiceInstance.getAllPhotos();
        return photo;
    }
    
    changeImage(self) {
        self.generate();
    }

}


