import {customElement, containerless} from 'aurelia-framework';

@customElement('b-button')
@containerless()
export class BButton {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
