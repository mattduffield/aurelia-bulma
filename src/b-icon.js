import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-icon')
@containerless()
export class BIcon {
  static inject = [Element];
  
  @bindable iconName;
  
  constructor(element) {
    this.element = element;
  }
}
