import {customElement} from 'aurelia-framework';

@customElement('b-nav-toggle')
export class BNavToggle {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
