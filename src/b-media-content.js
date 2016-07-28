import {customElement} from 'aurelia-framework';

@customElement('b-media-content')
export class BMediaContent {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
