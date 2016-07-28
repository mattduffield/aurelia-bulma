import {customElement} from 'aurelia-framework';

@customElement('b-media-left')
export class BMediaLeft {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
