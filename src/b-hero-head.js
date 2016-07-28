import {customElement} from 'aurelia-framework';

@customElement('b-hero-head')
export class BHeroHead {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
