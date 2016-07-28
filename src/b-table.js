import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table')
@containerless()
export class BTable {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
