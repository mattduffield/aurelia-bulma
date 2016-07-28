import {customElement} from 'aurelia-framework';

@customElement('b-title')
export class BTitle {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
