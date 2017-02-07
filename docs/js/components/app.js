import React from 'react';
import {loadJSON} from '../utils';
import {Dd, Dt, Map} from './';
import moment from 'moment';

moment.locale('sv-se');

/*
moment.updateLocale('sv-se', {
  relativeTime : {
    future: "in %s",
    past:   "%s ago",
    s:  "seconds",
    m:  "a minute",
    mm: "%d minutes",
    h:  "an hour",
    hh: "%d hours",
    d:  "a day",
    dd: "%d days",
    M:  "a month",
    MM: "%d months",
    y:  "a year",
    yy: "%d years"
  }
});
*/

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

  getTimeInfo(event) {
    let diff = moment(event.time).to('1986-02-28 23:21:30');

    return (<div>
      <p>{event.time}</p>
      <small>{diff}</small>
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
        <Map />
        <h2>Tidslinje Palmemordet</h2>
        <hr />
        {content}
      </div>
    );
  }
});
