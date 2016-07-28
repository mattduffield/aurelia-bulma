import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table-body')
@containerless()
export class BTableBody {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
