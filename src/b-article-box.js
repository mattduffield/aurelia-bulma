import {customElement, containerless} from 'aurelia-framework';

@customElement('b-article-box')
@containerless()
export class BArticleBox {
  static inject = [Element];
  
  constructor(element) {
    this.element = element;
  }
}
