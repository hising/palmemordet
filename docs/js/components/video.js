import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {videoStore} from '../stores';
import {chunkArray} from "../utils";

@observer
class Video extends Component {

  static renderVideoCards(videos) {
    return videos.map((video, index) => {
      return (
        <div className="card" key={index}>
          <img className="card-img-top img-fluid" src={video.thumbnail} alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">{video.name}</h4>
            <p className="card-text">{video.description}</p>
            <a href={video.url} target="video" className="btn btn-primary">Titta på videon</a>
          </div>
        </div>

      );
    });
  }

  render() {
    let videoListMarkup = () => {
      return chunkArray(videoStore.videos, 3).map((videos, index) => {
        return (
          <div className="card-deck" key={index}>
            {Video.renderVideoCards(videos)}
          </div>
        );
      });

    };

    return (
      <div>
        <h2>Videos om Palmemordet</h2>
        <hr />

        {videoListMarkup()}

      </div>
    );
  }
}

export default Video;
