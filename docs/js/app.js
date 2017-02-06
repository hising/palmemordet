import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';

/*eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
/*eslint-enable*/

ga('create', 'UA-186744-112', 'auto');
ga('send', 'pageview');

document.addEventListener('DOMContentLoaded', function () {
    const appRoot = document.getElementById('app');
    if (appRoot) {
        ReactDOM.render(<App />, appRoot);
    }
});