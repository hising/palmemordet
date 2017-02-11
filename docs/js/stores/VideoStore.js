import {observable, action} from 'mobx';
import request from 'superagent';

const videoStore = observable({
  videos: [],
  loadVideos() {
    request
      .get('data/videos.json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        this.videos = res.body.videos;
      });
  }
});

videoStore.loadVideos();

export default videoStore;
