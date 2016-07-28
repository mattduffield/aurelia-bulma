import {customElement} from 'aurelia-framework';

@customElement('b-nav-center')
export class BNavCenter {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
