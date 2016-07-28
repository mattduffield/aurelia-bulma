import {customElement, containerless} from 'aurelia-framework';

@customElement('b-tile')
@containerless()
export class BTile {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
