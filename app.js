'use strict';

function main() {
    const ENTRY_POINT = '/';
    let layoutInstance = null;
    let navbarInstance = null;
    const rootElement = document.querySelector('#root');
    const links = [
        {name: 'Gallery', url: '/'}, 
        {name: 'CamPage', url: '/gallery'}
    ];

    generateLayout();
    generateNavbar();
    activateRouter();
    addListenersToNavbar();


    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();
    }
    
    function generateNavbar() {
        navbarInstance = new Navbar(layoutInstance.header, links);
        navbarInstance.generate();
    }
    
    function activateRouter() {
        routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
    }
    
    function addListenersToNavbar() {
        const anchors = document.querySelectorAll('nav a');
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', changePage);
        })
    }
    

    function changePage(event) {
        const url = event.target.attributes.url.value;
        routerInstance.buildDom(url, layoutInstance.main);
    }

};



window.addEventListener('load', main);