import React from 'react';
import {loadJSON, getDistanceFromLatLonInKm} from '../utils';
import {Dd, Dt, Map, Newsletter} from './';
import moment from 'moment';
import {config} from '../palme';
import {Link} from 'react-router';

moment.locale('sv-se');
moment.updateLocale('sv', {
  relativeTime : {
    future: '%s före mordet',
    past:   '%s efter mordet'
  }
});

const Timeline = React.createClass({
  getInitialState() {
    return {
      timeline: {}
    };
  },

  componentDidMount() {
    loadJSON('data/timeline.json', response => {
      let timeline = JSON.parse(response);
      this.setState({
        timeline
      });
    });
  },

  handleClick(event) {
    if (this.map) {
      let content = `<p>${event.time} - ${event.description}</p>`;
      this.map.setPosition(event.coords.lat, event.coords.lng, content);
    }
  },

  getSources(event) {
    let links = [];
    if (event.sources && event.sources.constructor === Object) {
      for (let property in event.sources) {
        if (event.sources.hasOwnProperty(property)) {
          //console.log(event.sources[property]);
          let source = event.sources[property];
          if (source.constructor === Object) {
            links.push(source);
          } else {
            links = source;
          }
        }
      }
    }

    if (links.length > 0) {
      let items = links.map((link, index) => {
        return <li key={index}><a href={link.url} target="article">{link.label}</a></li>
      });
      return [<h6 key="header">Länkar</h6>, <ul key="list" className="links">{items}</ul>];
    } else {
      return null;
    }

  },

  getEventContent(event) {

    let getPeople = () => {
      let i = 0;
      let people = event.people.map(person => {
        i++;
        let url = `/people/${person}`;
        return <li key={i}><Link to={url}>{person}</Link></li>;
      });
      return <ul className="people">
              <li className="header">Personer:</li>
              {people}
             </ul>;
    };

    let getPlaces = () => {
      let i = 0;
      let places = event.place.map(place => {
        i++;
        let url = `/place/${place}`;
        return <li key={i}><Link to={url}>{place}</Link></li>;
      });
      return <ul className="places"><li className="header">Platser:</li>{places}</ul>;
    };

    let people = event.people.length > 0 ? getPeople() : '';
    let places = event.place.length > 0 ? getPlaces() : '';
    let sources = this.getSources(event);

    let content = (
      <div>
        <p className="lead">{event.description}</p>
        {places}
        {people}
        {sources}
        <p>
          <i className="fa fa-map-marker"
             aria-hidden="true"></i> <a href="#mapid"
                                        className="map-link"
                                        onClick={() => this.handleClick(event) }>Visa på kartan</a>
        </p>
      </div>
    );

    return <Dd content={content} />;
  },

  getDistance(coord1, coord2) {
      return getDistanceFromLatLonInKm(coord1.lat, coord1.lng, coord2.lat, coord2.lng);
  },

  getTimeInfo(event) {
    let diff = moment(event.time).to('1986-02-28 23:21:30');

    let distance = this.getDistance(event.coords, config.murderSceneCoords) * 1000;

    return (<div>
      {event.time}<br />
      <small>{diff}</small><br/>
      <small>{distance.toFixed()} meter från mordplatsen</small>
    </div>);
  },

  getTimeline() {
    let items = this.state.timeline.events.map(event => {
      return [<Dt content={this.getTimeInfo(event)} />, this.getEventContent(event)]
    });

    return <dl className="row">{items}</dl>;
  },

  render() {
    let content = this.state.timeline.events ? this.getTimeline() : 'Loading';
    return (
      <div>
        <Map ref={(child) => {this.map = child}}/>
        <h2>Tidslinje Palmemordet</h2>
        <hr />
        {content}
        <Newsletter />
      </div>
    );
  }
});

export default Timeline;
