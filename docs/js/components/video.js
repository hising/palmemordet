import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {videoStore} from '../stores';
import {chunkArray} from "../utils";
import {Newsletter} from './';
import {analytics} from '../analytics';

@observer
class Video extends Component {

  handleVideoClick(video) {
    analytics.trackEvent('Video', 'Click', video.name)
  }

  renderVideoCards(videos) {
    return videos.map((video, index) => {
      return (
        <div className="card video" key={index}>
          <div className="video-title">{video.name}</div>
          <a href={video.url}
             target="video"
             onClick={() => this.handleVideoClick(video)}>
          <img className="card-img-top img-fluid" src={video.thumbnail} alt="Card image cap" />
            <i className="fa fa-play-circle-o fa-4x" aria-hidden="true"></i>
          </a>
        </div>
      );
    });
  }

  render() {
    let videoListMarkup = () => {
      return chunkArray(videoStore.videos, 3).map((videos, index) => {
        return (
          <div className="card-deck" key={index}>
            {this.renderVideoCards(videos)}
          </div>
        );
      });
    };

    return (
      <div>
        <h2>Videos om Palmemordet</h2>
        {videoListMarkup()}
        <Newsletter />
      </div>
    );
  }
}

export default Video;
