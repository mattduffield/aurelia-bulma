import {customElement, containerless} from 'aurelia-framework';

@customElement('b-column')
@containerless()
export class BColumn {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
