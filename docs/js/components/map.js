import React from 'react';
import L from 'leaflet';

export const Map = React.createClass({
  componentDidMount: function() {
    let map = this.map = L.map(ReactDOM.findDOMNode(this), {
      minZoom: 2,
      maxZoom: 18,
      layers: [
        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
          maxZoom: 20,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
      ],
      attributionControl: false,
    }).setView([59.3366, 18.0628], 18);

    L.marker([59.3366, 18.0628]).addTo(map);
    map.on('click', this.onMapClick);

  },

  componentWillUnmount: function() {
    this.map.off('click', this.onMapClick);
    this.map = null;
  },

  onMapClick: function() {
    // Do some wonderful map things...
  },

  render() {
    return (<div id="mapid"></div>);
  }
});
