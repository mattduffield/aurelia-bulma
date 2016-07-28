import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-radio-group')
@containerless()
export class BRadio {
  static inject = [Element];

  constructor(element) {
    this.element = element;
  }
}