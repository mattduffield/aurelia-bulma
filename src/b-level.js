import {customElement} from 'aurelia-framework';

@customElement('b-level')
export class BLevel {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
