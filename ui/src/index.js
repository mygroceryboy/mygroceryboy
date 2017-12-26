(() => {
    'use strict';

    function isHtml5Supported() {
        return 'registerElement' in document &&
            'import' in document.createElement('link') &&
            'content' in document.createElement('template');
    }

    function showRoot() {
        var root = document.getElementById('root');
        root.hidden = false;
    }

    function loadPolymerImport() {
        var polymerImport = document.createElement('link');
        polymerImport.rel="import"
        polymerImport.href = '/dist/polymer-components.html';
        polymerImport.onload = showRoot;
        document.body.appendChild(polymerImport);
    }

    function loadPolyfill() {
        var polyfill = document.createElement('script');
        polyfill.src = '/dist/webcomponents-lite.js';
        document.body.appendChild(polyfill);
        //TODO: Firefix is not supporting this callback
        // polyfill.onload = loadPolymerImport;
        loadPolymerImport();
    }

    isHtml5Supported() ? loadPolymerImport() : loadPolyfill();
})();