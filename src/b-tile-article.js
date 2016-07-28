import {customElement, containerless} from 'aurelia-framework';

@customElement('b-tile-article')
@containerless()
export class BTileArticle {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
