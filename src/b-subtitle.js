import {customElement} from 'aurelia-framework';

@customElement('b-subtitle')
export class BSubtitle {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
