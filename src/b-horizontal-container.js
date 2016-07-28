import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-horizontal-container')
@containerless()
export class BHorizontalContainer {
  static inject = [Element];
  
  @bindable label;
  
  constructor(element) {
    this.element = element;
  }

}
