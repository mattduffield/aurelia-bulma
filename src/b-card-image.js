import {customElement, bindable} from 'aurelia-framework';

@customElement('b-card-image')
export class BCardImage {
  static inject = [Element];
  
  @bindable src = '';
  @bindable alt = '';

  constructor(element) {
    this.element = element;
  }

}
