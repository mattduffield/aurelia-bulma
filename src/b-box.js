import {customElement, containerless} from 'aurelia-framework';

@customElement('b-box')
@containerless()
export class BBox {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
