import {customAttribute, bindable} from 'aurelia-framework';

@customAttribute('b-class')
export class BClass {
  static inject = [Element];

  @bindable items;

  constructor(element) {
    this.element = element;
    if (element.nodeType === 8) {
      this.element = this.element.previousElementSibling;
    }
    else if (typeof(element.au.controller) === 'object') {
      this.element = this.element.children.item(0);
    }
  }

  attached() {
    if (this.items) {
      let list = this.items.split(' ');
      this.element.classList.add(...list);
    }
  }
}
