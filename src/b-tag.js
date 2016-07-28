import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-tag')
@containerless()
export class BTag {
  static inject = [Element];

  @bindable label;
  
  constructor(element) {
    this.element = element;
  }
}