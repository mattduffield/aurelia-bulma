import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table-header')
@containerless()
export class BTableHeader {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
