import {customElement, bindable} from 'aurelia-framework';

@customElement('b-image')
export class BImage {
  static inject = [Element];
  
  @bindable src = '';
  @bindable alt = '';

  constructor(element) {
    this.element = element;
  }

}
