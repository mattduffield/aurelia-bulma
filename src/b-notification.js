import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement('b-notification')
@containerless()
export class BNotification {
  static inject = [Element];

  constructor(element) {
    this.element = element;
  }
}