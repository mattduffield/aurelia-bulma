import {customElement, containerless} from 'aurelia-framework';

@customElement('b-columns')
@containerless()
export class BColumns {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
