import {customElement} from 'aurelia-framework';

@customElement('b-hero')
export class BHero {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
