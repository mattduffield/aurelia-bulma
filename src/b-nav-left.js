import {customElement} from 'aurelia-framework';

@customElement('b-nav-left')
export class BNavLeft {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
