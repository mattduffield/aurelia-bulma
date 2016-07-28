import {customElement} from 'aurelia-framework';

@customElement('b-nav-right')
export class BNavRight {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
