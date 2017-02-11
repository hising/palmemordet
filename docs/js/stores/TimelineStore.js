import request from 'superagent';
import {observable} from "mobx";
import {EventModel} from "../models/event";


export class TimelineStore {
  @observable events = [];
  @observable loading = true;

  constructor() {
    this.loadEvents();
  }

  createEventsFromServer(events) {
    events.forEach(jsonEvent => {
      this.events.push(new EventModel(jsonEvent))
    });
  }

  loadEvents() {
    request
      .get('data/timeline.json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        this.createEventsFromServer(res.body.events);
        this.loading = false;
      });

  }

}
