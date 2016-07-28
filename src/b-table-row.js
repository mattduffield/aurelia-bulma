import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table-row')
@containerless()
export class BTableRow {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
