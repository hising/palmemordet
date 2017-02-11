export class EventModel {
  constructor(json) {
    this._time = json._time;
    this._place = json._place;
    this._coords = json._coords;
    this._description = json._description;
    this._people = json._people;
    this._uncertainty = json._uncertainty;
    this._sources = json._sources;
    this._json = json;
  }

  set json(value) {
    this._json = value;
  }

  set time(value) {
    this._time = value;
  }

  set place(value) {
    this._place = value;
  }

  set coords(value) {
    this._coords = value;
  }

  set description(value) {
    this._description = value;
  }

  set people(value) {
    this._people = value;
  }

  set uncertainty(value) {
    this._uncertainty = value;
  }

  set sources(value) {
    this._sources = value;
  }
  get json() {
    return this._json;
  }

  get time() {
    return this._time;
  }

  get place() {
    return this._place;
  }

  get coords() {
    return this._coords;
  }

  get description() {
    return this._description;
  }

  get people() {
    return this._people;
  }

  get uncertainty() {
    return this._uncertainty;
  }

  get sources() {
    return this._sources;
  }
}

