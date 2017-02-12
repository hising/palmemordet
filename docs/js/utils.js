export const isDev = location.hostname === 'localhost';

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

export function loadScript(src) {
  let scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', src);
  scriptElement.setAttribute('type', 'text/javascript');
  document.body.appendChild(scriptElement);
}

export function attachLiveReload(portNumber) {
    if (isDev) {
      let src = `http://localhost:${portNumber}/livereload.js`;
      loadScript(src);
    }
}

export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export function chunkArray(items, size) {
  return items.map((item, index) => {
    return index % size === 0 ? items.slice(index, index + size) : null;
  }).filter(item => {
    return item;
  });
}

document.addEventListener('DOMContentLoaded', function () {
    attachLiveReload(33377);
});
