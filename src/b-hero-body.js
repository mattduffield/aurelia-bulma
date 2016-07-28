import {customElement} from 'aurelia-framework';

@customElement('b-hero-body')
export class BHeroBody {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
