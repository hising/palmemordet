export function loadJSON(file, callback) {
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

export const isDev = location.hostname === 'localhost';
export function attachLiveReload(portNumber) {
    if (isDev) {
        let src = `http://localhost:${portNumber}/livereload.js`;
        let scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', src);
        scriptElement.setAttribute('type', 'text/javascript');
        document.body.appendChild(scriptElement);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    attachLiveReload(33377);
});