import {customElement, containerless} from 'aurelia-framework';

@customElement('b-table-footer')
@containerless()
export class BTableFooter {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }

}
