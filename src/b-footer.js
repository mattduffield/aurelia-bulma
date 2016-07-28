import {customElement} from 'aurelia-framework';

@customElement('b-footer')
export class BFooter {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
