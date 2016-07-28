import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-horizontal-container-grouped')
@containerless()
export class BHorizontalContainerGrouped {
  static inject = [Element];
  
  @bindable label;
  
  constructor(element) {
    this.element = element;
  }

}
