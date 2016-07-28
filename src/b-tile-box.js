import {customElement, containerless} from 'aurelia-framework';

@customElement('b-tile-box')
@containerless()
export class BTileBox {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
