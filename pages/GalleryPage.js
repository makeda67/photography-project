'use strict';

function GalleryPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.loading = null;
    this.photos = null;
    this.arrayOfImages = [null, null, null, null, null, null, null];

}


GalleryPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
    this.elements = `
    <main>
    <h1>GalleryPage</h1>
    <p>Some photos around here</p>
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

    this.elements += `</div>
        </main>
        `;
    this.render();
}

GalleryPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

GalleryPage.prototype.connectToAPI = async function() {
    var photo =  await galleryServiceInstance.getAllPhotos();
    console.log(photo)
    return photo;
}