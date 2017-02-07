import {loadJSON} from '../utils';
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

export const Dt = React.createClass({
  render() {
    return (<dt className="col-md-4">{this.props.content}</dt>);
  }
});

export const Dd = React.createClass({
  render() {
    return (<dl className="col-md-8">{this.props.content}</dl>);
  }
});

export const App = React.createClass({
  getInitialState() {
    return {
      timeline: {}
    };
  },

  componentDidMount() {
    loadJSON('js/timeline.json', response => {
      let timeline = JSON.parse(response);
      this.setState({
        timeline
      });
    });
  },

  getEventContent(event) {

    let getPeople = () => {
        let i = 0;
        let people = event.people.map(person => {
          i++;
          return <li key={i} className="list-inline-item">{person}</li>;
      });
      return <ul className="list-inline people">{people}</ul>;
    };

    let getPlaces = () => {
      let i = 0;
      let places = event.place.map(place => {
        i++;
        return <li key={i} className="list-inline-item">{place}</li>;
      });
      return <ul className="list-inline places">{places}</ul>;
    };

    let people = event.people.length > 0 ? getPeople() : '';
    let places = event.place.length > 0 ? getPlaces() : '';
    let content = (
      <div>
        <p>{event.description}</p>
        {places}
        {people}
      </div>
    );

    return <Dd content={content} />;
  },

  getTimeline() {
    let items = this.state.timeline.events.map(event => {
      return [<Dt content={event.time} />, this.getEventContent(event)]
    });

    return <dl className="row">{items}</dl>;
  },

  render() {
    let content = this.state.timeline.events ? this.getTimeline() : 'Loading';
    return (
      <div>
        <Map />
        <h2>Tidslinje Palmemordet</h2>
        <hr />
        {content}
      </div>
    );
  }
});
