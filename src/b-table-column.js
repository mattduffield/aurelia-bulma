import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table-column')
@containerless()
export class BTableColumn {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
