import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';

(function(window, document, tagName, scriptSource, trackerName){

    window['GoogleAnalyticsObject'] = trackerName;

    window[trackerName] = window[trackerName] || function(){
        (window[trackerName].q = window[trackerName].q || []).push(arguments);
    };

    window[trackerName].l = 1 * new Date();
    let scriptElement = document.createElement(tagName);
    let scriptCollection = document.getElementsByTagName(tagName)[0];
    scriptElement.async = 1;
    scriptElement.src = scriptSource;
    scriptCollection.parentNode.insertBefore(scriptElement, scriptCollection);

})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-186744-112', 'auto');
ga('send', 'pageview');

document.addEventListener('DOMContentLoaded', function () {
    const appRoot = document.getElementById('app');
    if (appRoot) {
        ReactDOM.render(<App />, appRoot);
    }
});