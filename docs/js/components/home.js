import React from 'react';
import {Newsletter} from './newsletter';

export const Home = React.createClass({
  render() {
    return (
      <div className="starter-template">
        <h1>Palmemordet</h1>
        <img className="img-fluid d-block mx-auto" src="img/palme.png" />
        <p className="lead">Samlade länkar och resurser om Palmemordet. Baserat på ett otal källor. Målet är att
          bygga upp en strukturerad sökbar databas med tidsstämplar, geokodning och källor. Målet är att
          göra den information som finns tillgänglig mer överblickbar.</p>

        <Newsletter />

        <p><a href="https://github.com/hising/palmemordet">Läs mer på Github</a></p>
      </div>
    );
  }
});
