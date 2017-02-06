import React from 'react';
import ReactDOM from 'react-dom';

let is_dev = location.hostname === 'localhost';

const App = React.createClass({
    render() {
        return (<div>App</div>);
    }
});

function loadJSON(file, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.overrideMimeType('application/json');
    httpRequest.open('GET', file, true);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == '200') {
            callback(httpRequest.responseText);
        }
    };
    httpRequest.send(null);
}

if (is_dev) {
    let src = 'http://localhost:33377/livereload.js';
    let scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', src);
    scriptElement.setAttribute('type', 'text/javascript');
    document.body.appendChild(scriptElement);
}

/*eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
/*eslint-enable*/

ga('create', 'UA-186744-112', 'auto');
ga('send', 'pageview');

document.addEventListener('DOMContentLoaded', function () {
    loadJSON('js/timeline.json', function (response) {
        let timeline = JSON.parse(response);
    });

    const appRoot = document.getElementById('app');
    if (appRoot) {
        ReactDOM.render(<App />, appRoot);
    }
});