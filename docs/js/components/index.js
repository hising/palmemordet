import {loadJSON} from '../utils';

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
            let people = event.people.map(person => {
                return <li className="list-inline-item">{person}</li>;
            });
            return <ul className="list-inline people">{people}</ul>;
        };

        let getPlaces = () => {
            let places = event.place.map(place => {
                return <li className="list-inline-item">{place}</li>;
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
                <h2>Tidslinje Palmemordet</h2>
                <hr />
                {content}
            </div>
        );
    }
});