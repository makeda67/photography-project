'use strict';

function PhotographyService() {
    this.baseUrl = 'https://picsum.photos/v2/list';
}

PhotographyService.prototype.getAllPhotos = async function() {
    //random number hasta 30
    const randomNumber = Math.floor(Math.random() * 30);
    const response = await fetch(`${this.baseUrl}?page=${randomNumber}`);
    
    const data = await response.json();
    
    //random index de 30
    const randomItem = Math.floor(Math.random()*data.length);
    
    return data[randomItem];
}

const photographyServiceInstance = new PhotographyService();

photographyServiceInstance.getAllPhotos();