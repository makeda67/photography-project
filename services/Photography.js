'use strict';

function PhotographyService() {
    this.baseUrl = 'https://picsum.photos/v2/list';
}

PhotographyService.prototype.getAllPhotos = async function() {
    //random number hasta 30
    var randomNumber = Math.floor(Math.random() * 30);
    var response = await fetch(`${this.baseUrl}?page=${randomNumber}`);
    
    var data = await response.json();
    
    //random index de 30
    var randomItem = Math.floor(Math.random()*data.length);
    
    return data[randomItem];
}

var photographyServiceInstance = new PhotographyService();

photographyServiceInstance.getAllPhotos();