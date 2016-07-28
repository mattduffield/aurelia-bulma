import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-radio')
@containerless()
export class BRadio {
  static inject = [Element];

  @bindable label;
  @bindable model;
  @bindable radioName;
  @bindable value;

  constructor(element) {
    this.element = element;
  }
}