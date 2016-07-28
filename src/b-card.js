import {customElement} from 'aurelia-framework';

@customElement('b-card')
export class BCard {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
