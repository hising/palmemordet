import React from 'react';
import {loadJSON} from '../utils';
import {Dd, Dt, Map} from './';
import moment from 'moment';

moment.locale('sv-se');
moment.updateLocale('sv', {
  relativeTime : {
    future: "%s före mordet",
    past:   "%s efter mordet"
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
        return <li key={i}>{person}</li>;
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
        return <li key={i}>{place}</li>;
      });
      return <ul className="places"><li className="header">Platser:</li>{places}</ul>;
    };

    let people = event.people.length > 0 ? getPeople() : '';
    let places = event.place.length > 0 ? getPlaces() : '';
    let content = (
      <div>
        <p className="lead">{event.description}</p>
        {places}
        {people}
      </div>
    );

    return <Dd content={content} />;
  },

  getTimeInfo(event) {
    let diff = moment(event.time).to('1986-02-28 23:21:30');

    return (<div>
      {event.time}<br />
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
