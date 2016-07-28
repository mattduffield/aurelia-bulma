import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-checkbox')
@containerless()
export class BCheckbox {
  static inject = [Element];

  @bindable label;
  @bindable model;
  @bindable value;

  constructor(element) {
    this.element = element;
  }
}