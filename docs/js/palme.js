function loadJSON(file, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.overrideMimeType("application/json");
    httpRequest.open('GET', file, true);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == "200") {
            callback(httpRequest.responseText);
        }
    };
    httpRequest.send(null);
}

document.addEventListener("DOMContentLoaded", function () {
    loadJSON('js/timeline.json', function (response) {
        var timeline = JSON.parse(response);
        console.log(timeline);
    });
});