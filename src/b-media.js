import {customElement} from 'aurelia-framework';

@customElement('b-media')
export class BMedia {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
