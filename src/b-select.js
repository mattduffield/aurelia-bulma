import {inject, customElement, containerless, bindable} from 'aurelia-framework';

var SelectID = 0;

@customElement('b-select')
@inject(Element)
@containerless()
export class BSelect {
  @bindable label;
  @bindable prompt;
  @bindable placeholder;
  @bindable displayMember;
  @bindable valueMember;
  @bindable value;
  @bindable items;
  @bindable name;

  constructor(element) {
    this.id = 's' + SelectID++;
    this.element = element;
  }

  get idTag() {
    return '#' + this.id;
  }

  getDisplay(item) {
    if (this.displayMember == '.') {
      return item;
    }
    else {
      return item[this.displayMember];
    }
  }
  getValue(item) {
    if (this.valueMember == '.') {
      return item;
    }
    else {
      return item[this.valueMember];
    }
  }

  // attached() {
  //   this.handleDisabledAttribute();
  // }
  // handleDisabledAttribute() {
  //   var ctl = this.getControl();
  //   var att = this.element.getAttribute("disabled");
  //   if (att && (att === true || att === "true")) {
  //     if (ctl) {
  //       ctl[0].setAttribute("disabled", "true");
  //     }      
  //   }    
  // }

  // getControl() {
  //   var ctl = this.element.querySelector("select");
  //   return ctl;    
  // }

}