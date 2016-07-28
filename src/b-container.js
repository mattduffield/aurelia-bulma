import {customElement, bindable} from 'aurelia-framework';

@customElement('b-container')
export class BContainer {
  static inject = [Element];
  
  @bindable label;
  
  constructor(element) {
    this.element = element;
  }

}
