import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {videoStore} from '../stores';

@observer
class Video extends Component {

  render() {

    let videoListMarkup = () => {
      return videoStore.videos.map(video => {
        return <li key={video.name}><a href={video.url} target="video">{video.name}</a></li>;
      });
    };

    return (
      <div>
        <h2>Videos om Palmemordet</h2>
      <ul>
        {videoListMarkup()}
      </ul>
      </div>
    );
  }
}

export default Video;
