import {customElement} from 'aurelia-framework';

@customElement('b-nav')
export class BNav {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
