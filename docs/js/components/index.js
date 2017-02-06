import {loadJSON} from '../utils';

export const Dt = React.createClass({
    render() {
        return (<dt>{this.props.content}</dt>);
    }
});

export const Dd = React.createClass({
    render() {
        return (<dl>{this.props.content}</dl>);
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

    getTimeline() {
        let items = this.state.timeline.events.map(event => {
            return [<Dt content={event.time} />, <Dd content={event.description} />]
        });

        return <dl>{items}</dl>;
    },

    render() {
        let content = this.state.timeline.events ? this.getTimeline() : 'Loading';
        return (<div>{content}</div>);
    }
});