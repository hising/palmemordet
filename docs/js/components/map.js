import React from "react";
import L from "leaflet";
import * as PMO from "../palme";

export class Map extends React.PureComponent {

  constructor(props, context) {
    super(props, context);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
        let map = (this.map = L.map(this.mapRef.current, {
            minZoom: 2,
            maxZoom: 19,
            scrollWheelZoom: false,
            layers: [
                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        maxZoom: 19,
                        attribution:
                            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }
                )
            ],
            attributionControl: false
        }).setView(PMO.config.murderSceneCoordsArray, 18));

        let marker = (this.marker = L.marker(
            PMO.config.murderSceneCoordsArray
        ).addTo(map));
        map.on("click", this.onMapClick);

        let popup = (this.popup = L.popup()
            .setLatLng(PMO.config.murderSceneCoordsArray)
            .setContent("<p>Mordplatsen</p>")
            .openOn(map));
    }

    setPosition(lat, lng, content) {
        this.map.panTo([lat, lng]);
        this.marker.setLatLng([lat, lng]);
        this.popup.setLatLng([lat, lng]).setContent("<p>" + content + "</p>");

        if (!this.popup.isPopupOpen()) {
            this.popup.openPopup();
        }
    }

    componentWillUnmount() {
        this.map.off("click", this.onMapClick);
        this.map = null;
        this.marker = null;
    }

    onMapClick(event) {
        // console.log("Clicked", event);
        // Do some wonderful map things...
    }

    render() {
        return <div ref={this.mapRef} id="mapid" />;
    }
}
