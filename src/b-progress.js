import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-progress')
@containerless()
export class BProgress {
  static inject = [Element];

  @bindable value;
  @bindable max;
  
  constructor(element) {
    this.element = element;
  }
}