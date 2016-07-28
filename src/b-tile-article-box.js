import {customElement, containerless} from 'aurelia-framework';

@customElement('b-tile-article-box')
@containerless()
export class BTileArticleBox {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
