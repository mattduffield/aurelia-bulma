import {customElement} from 'aurelia-framework';

@customElement('b-card-content')
export class BCardContent {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
