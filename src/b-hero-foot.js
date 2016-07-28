import {customElement} from 'aurelia-framework';

@customElement('b-hero-foot')
export class BHeroFoot {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
